// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity =0.7.6;
pragma abicoder v2;

import "@uniswap/v3-periphery/contracts/base/PeripheryImmutableState.sol";
import "@uniswap/v3-periphery/contracts/libraries/PoolAddress.sol";
import "@uniswap/v3-periphery/contracts/libraries/Path.sol";

import "./interfaces/IUniswapV3StaticQuoter.sol";
import "./UniV3QuoterCore.sol";

contract UniswapV3StaticQuoter is IUniswapV3StaticQuoter, UniV3QuoterCore {
    using LowGasSafeMath for uint256;
    using LowGasSafeMath for int256;
    using SafeCast for uint256;
    using SafeCast for int256;
    using Path for bytes;

    address immutable factory;

    constructor(address _factory) {
        factory = _factory;
    }

    function getPool(
        address tokenA,
        address tokenB,
        uint24 fee
    ) private view returns (IUniswapV3Pool) {
        return
            IUniswapV3Pool(
                PoolAddress.computeAddress(
                    factory,
                    PoolAddress.getPoolKey(tokenA, tokenB, fee)
                )
            );
    }

    function quoteExactInputSingle(
        QuoteExactInputSingleParams memory params
    ) public view override returns (uint256 amountOut) {
        bool zeroForOne = params.tokenIn < params.tokenOut;
        IUniswapV3Pool pool = getPool(
            params.tokenIn,
            params.tokenOut,
            params.fee
        );

        (int256 amount0, int256 amount1) = quote(
            address(pool),
            zeroForOne,
            params.amountIn.toInt256(),
            params.sqrtPriceLimitX96 == 0
                ? (
                    zeroForOne
                        ? TickMath.MIN_SQRT_RATIO + 1
                        : TickMath.MAX_SQRT_RATIO - 1
                )
                : params.sqrtPriceLimitX96
        );

        return zeroForOne ? uint256(-amount1) : uint256(-amount0);
    }

    function quoteExactInput(
        bytes memory path,
        uint256 amountIn
    ) public view override returns (uint256 amountOut) {
        while (true) {
            (address tokenIn, address tokenOut, uint24 fee) = path
                .decodeFirstPool();

            // the outputs of prior swaps become the inputs to subsequent ones
            amountIn = quoteExactInputSingle(
                QuoteExactInputSingleParams({
                    tokenIn: tokenIn,
                    tokenOut: tokenOut,
                    fee: fee,
                    amountIn: amountIn,
                    sqrtPriceLimitX96: 0
                })
            );

            // decide whether to continue or terminate
            if (path.hasMultiplePools()) {
                path = path.skipToken();
            } else {
                return amountIn;
            }
        }
    }

    function quoteExactOutputSingle(
        QuoteExactOutputSingleParams memory params
    ) public view override returns (uint256 amountIn) {
        bool zeroForOne = params.tokenIn < params.tokenOut;
        IUniswapV3Pool pool = getPool(
            params.tokenIn,
            params.tokenOut,
            params.fee
        );

        (int256 amount0, int256 amount1) = quote(
            address(pool),
            zeroForOne,
            -params.amount.toInt256(),
            params.sqrtPriceLimitX96 == 0
                ? (
                    zeroForOne
                        ? TickMath.MIN_SQRT_RATIO + 1
                        : TickMath.MAX_SQRT_RATIO - 1
                )
                : params.sqrtPriceLimitX96
        );

        return zeroForOne ? uint256(amount0) : uint256(amount1);
    }

    function quoteExactOutput(
        bytes memory path,
        uint256 amountOut
    ) public view override returns (uint256 amountIn) {
        while (true) {
            (address tokenOut, address tokenIn, uint24 fee) = path
                .decodeFirstPool();

            // the outputs of prior swaps become the inputs to subsequent ones
            amountOut = quoteExactOutputSingle(
                QuoteExactOutputSingleParams({
                    tokenIn: tokenIn,
                    tokenOut: tokenOut,
                    fee: fee,
                    amount: amountOut,
                    sqrtPriceLimitX96: 0
                })
            );

            // decide whether to continue or terminate
            if (path.hasMultiplePools()) {
                path = path.skipToken();
            } else {
                return amountOut;
            }
        }
    }
}
