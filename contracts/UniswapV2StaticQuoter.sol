// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity =0.7.6;
pragma abicoder v2;

import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol";
import "@uniswap/v3-core/contracts/libraries/LowGasSafeMath.sol";

contract UniswapV2StaticQuoter {
    using LowGasSafeMath for uint256;

    address immutable factory;

    constructor(address _factory) {
        factory = _factory;
    }

    function _getAmountOut(
        uint256 amountIn,
        uint256 reserveIn,
        uint256 reserveOut
    ) internal pure returns (uint256 amountOut) {
        // INSUFFICIENT_INPUT_AMOUNT
        if (amountIn == 0) return 0;
        // INSUFFICIENT_LIQUIDITY
        if (reserveIn == 0 || reserveOut == 0) return 0;
        uint256 amountInWithFee = amountIn.mul(997);
        uint256 numerator = amountInWithFee.mul(reserveOut);
        uint256 denominator = reserveIn.mul(1000).add(amountInWithFee);
        amountOut = numerator / denominator;
    }

    function _getAmountIn(
        uint256 amountOut,
        uint256 reserveIn,
        uint256 reserveOut
    ) internal pure returns (uint256 amountIn) {
        // INSUFFICIENT_OUTPUT_AMOUNT
        if (amountOut == 0) return 0;
        // INSUFFICIENT_LIQUIDITY
        if (reserveIn == 0 || reserveOut == 0) return 0;
        uint256 numerator = reserveIn.mul(amountOut).mul(1000);
        uint256 denominator = reserveOut.sub(amountOut).mul(997);
        amountIn = (numerator / denominator).add(1);
    }

    function getAmountOut(
        address tokenIn,
        address tokenOut,
        address pool,
        uint256 amountIn
    ) public view returns (uint256 amountOut) {
        IUniswapV2Pair v2pair = IUniswapV2Pair(pool);
        (address token0, address token1) = tokenIn > tokenOut
            ? (tokenIn, tokenOut)
            : (tokenOut, tokenIn);

        // wrong pool
        if (v2pair.token0() != token0 || v2pair.token1() != token1) {
            return 0;
        }

        (uint256 reserve0, uint256 reserve1,) = v2pair.getReserves();
        (uint256 reserveIn, uint256 reserveOut) = tokenIn > tokenOut
            ? (reserve0, reserve1)
            : (reserve1, reserve0);

        amountOut = _getAmountOut(amountIn, reserveIn, reserveOut);
    }

    function getAmountIn(
        address tokenIn,
        address tokenOut,
        address pool,
        uint256 amountOut
    ) public view returns (uint256 amountIn) {
        IUniswapV2Pair v2pair = IUniswapV2Pair(pool);
        (address token0, address token1) = tokenIn > tokenOut
            ? (tokenIn, tokenOut)
            : (tokenOut, tokenIn);

        // wrong pool
        if (v2pair.token0() != token0 || v2pair.token1() != token1) {
            return 0;
        }

        (uint256 reserve0, uint256 reserve1,) = v2pair.getReserves();
        (uint256 reserveIn, uint256 reserveOut) = tokenIn > tokenOut
            ? (reserve0, reserve1)
            : (reserve1, reserve0);

        amountIn = _getAmountIn(amountOut, reserveIn, reserveOut);
    }
}
