// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity =0.7.6;
pragma abicoder v2;

import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol";

import "./UniV3QuoterCore.sol";

contract UniswapStaticQuoter is UniV3QuoterCore {
    using LowGasSafeMath for uint256;
    using LowGasSafeMath for int256;
    using SafeCast for uint256;
    using SafeCast for int256;

    function decodePath(
        bytes memory path
    ) external pure returns (Route[] memory) {
        return abi.decode(path, (Route[]));
    }

    function _getAmountOutV2(
        uint256 amountIn,
        uint256 reserveIn,
        uint256 reserveOut,
        uint8 feePercent,
        uint8 maxPercent
    ) internal pure returns (uint256 amountOut) {
        // INSUFFICIENT_INPUT_AMOUNT
        if (amountIn == 0) return 0;
        // INSUFFICIENT_LIQUIDITY
        if (reserveIn == 0 || reserveOut == 0) return 0;
        uint256 amountInWithFee = amountIn.mul(feePercent);
        uint256 numerator = amountInWithFee.mul(reserveOut);
        uint256 denominator = reserveIn.mul(maxPercent).add(amountInWithFee);
        amountOut = numerator / denominator;
    }

    function _getAmountInV2(
        uint256 amountOut,
        uint256 reserveIn,
        uint256 reserveOut,
        uint8 feePercent,
        uint8 maxPercent
    ) internal pure returns (uint256 amountIn) {
        // INSUFFICIENT_OUTPUT_AMOUNT
        if (amountOut == 0) return 0;
        // INSUFFICIENT_LIQUIDITY
        if (reserveIn == 0 || reserveOut == 0) return 0;
        uint256 numerator = reserveIn.mul(amountOut).mul(maxPercent);
        uint256 denominator = reserveOut.sub(amountOut).mul(feePercent);
        amountIn = (numerator / denominator).add(1);
    }

    function getAmountOutV2(
        address tokenIn,
        address tokenOut,
        address pool,
        uint8 feePercent,
        uint8 maxPercent,
        uint256 amountIn
    ) public view returns (uint256 amountOut) {
        IUniswapV2Pair v2pair = IUniswapV2Pair(pool);
        (address token0, address token1) = tokenIn < tokenOut
            ? (tokenIn, tokenOut)
            : (tokenOut, tokenIn);

        // wrong pool
        if (v2pair.token0() != token0 || v2pair.token1() != token1) {
            return 0;
        }

        (uint256 reserve0, uint256 reserve1, ) = v2pair.getReserves();
        (uint256 reserveIn, uint256 reserveOut) = tokenIn < tokenOut
            ? (reserve0, reserve1)
            : (reserve1, reserve0);

        amountOut = _getAmountOutV2(
            amountIn,
            reserveIn,
            reserveOut,
            feePercent,
            maxPercent
        );
    }

    function getAmountInV2(
        address tokenIn,
        address tokenOut,
        address pool,
        uint8 feePercent,
        uint8 maxPercent,
        uint256 amountOut
    ) public view returns (uint256 amountIn) {
        IUniswapV2Pair v2pair = IUniswapV2Pair(pool);
        (address token0, address token1) = tokenIn < tokenOut
            ? (tokenIn, tokenOut)
            : (tokenOut, tokenIn);

        // wrong pool
        if (v2pair.token0() != token0 || v2pair.token1() != token1) {
            return 0;
        }

        (uint256 reserve0, uint256 reserve1, ) = v2pair.getReserves();
        (uint256 reserveIn, uint256 reserveOut) = tokenIn < tokenOut
            ? (reserve0, reserve1)
            : (reserve1, reserve0);

        amountIn = _getAmountInV2(
            amountOut,
            reserveIn,
            reserveOut,
            feePercent,
            maxPercent
        );
    }

    function getAmountOutV3(
        address tokenIn,
        address tokenOut,
        address pool,
        uint256 amountIn
    ) public view returns (uint256 amountOut) {
        IUniswapV3likePool v3pool = IUniswapV3likePool(pool);
        (address token0, address token1) = tokenIn < tokenOut
            ? (tokenIn, tokenOut)
            : (tokenOut, tokenIn);

        // wrong pool
        if (v3pool.token0() != token0 || v3pool.token1() != token1) {
            return 0;
        }

        bool zeroForOne = tokenIn < tokenOut;
        (int256 amount0, int256 amount1) = quote(
            pool,
            zeroForOne,
            amountIn.toInt256(),
            zeroForOne
                ? TickMath.MIN_SQRT_RATIO + 1
                : TickMath.MAX_SQRT_RATIO - 1
        );

        amountOut = zeroForOne ? uint256(-amount1) : uint256(-amount0);
    }

    function getAmountInV3(
        address tokenIn,
        address tokenOut,
        address pool,
        uint256 amountOut
    ) public view returns (uint256 amountIn) {
        IUniswapV3likePool v3pool = IUniswapV3likePool(pool);
        (address token0, address token1) = tokenIn < tokenOut
            ? (tokenIn, tokenOut)
            : (tokenOut, tokenIn);

        // wrong pool
        if (v3pool.token0() != token0 || v3pool.token1() != token1) {
            return 0;
        }

        bool zeroForOne = tokenIn < tokenOut;
        (int256 amount0, int256 amount1) = quote(
            pool,
            zeroForOne,
            -amountOut.toInt256(),
            zeroForOne
                ? TickMath.MIN_SQRT_RATIO + 1
                : TickMath.MAX_SQRT_RATIO - 1
        );

        return zeroForOne ? uint256(amount0) : uint256(amount1);
    }

    struct Route {
        address tokenIn;
        address tokenOut;
        address pool;
        uint8 poolType; // 0: v2, 1: v3
        uint8 feePercent;
        uint8 maxPercent;
    }

    function getAmountOut(
        bytes memory path,
        uint256 amount
    ) public view returns (uint256[] memory) {
        Route[] memory routes = abi.decode(path, (Route[]));
        uint256[] memory amountOuts = new uint256[](routes.length);
        for (uint256 i = 0; i < routes.length; i++) {
            if (routes[i].poolType == 0) {
                // v2
                amount = getAmountOutV2(
                    routes[i].tokenIn,
                    routes[i].tokenOut,
                    routes[i].pool,
                    routes[i].feePercent,
                    routes[i].maxPercent,
                    amount
                );
            } else {
                // v3
                amount = getAmountOutV3(
                    routes[i].tokenIn,
                    routes[i].tokenOut,
                    routes[i].pool,
                    amount
                );
            }

            amountOuts[i] = amount;
        }

        return amountOuts;
    }

    function getAmountIn(
        bytes memory path,
        uint256 amount
    ) public view returns (uint256[] memory) {
        Route[] memory routes = abi.decode(path, (Route[]));
        uint256[] memory amountIns = new uint256[](routes.length);
        for (uint256 i = routes.length - 1; i >= 0; i--) {
            if (routes[i].poolType == 0) {
                // v2
                amount = getAmountInV2(
                    routes[i].tokenIn,
                    routes[i].tokenOut,
                    routes[i].pool,
                    routes[i].feePercent,
                    routes[i].maxPercent,
                    amount
                );
            } else {
                // v3
                amount = getAmountInV3(
                    routes[i].tokenIn,
                    routes[i].tokenOut,
                    routes[i].pool,
                    amount
                );
            }

            amountIns[i] = amount;
        }

        return amountIns;
    }
}
