// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity =0.7.6;

import "./base/UniV3likeQuoterCore.sol";
import "./libraries/TickBitmap.sol";

contract UniV3QuoterCore is UniV3likeQuoterCore {
    function _tryGetPoolCurrentFee(
        address pool
    ) internal view returns (uint16) {
        try IUniswapV3likePool(pool).currentFee() returns (uint24 result) {
            return uint16(result);
        } catch {
            return uint16(IUniswapV3likePool(pool).fee());
        }
    }

    function getPoolGlobalState(
        address pool
    ) internal view override returns (GlobalState memory gs) {
        gs.fee = _tryGetPoolCurrentFee(pool);
        (gs.startPrice, gs.startTick, , , , , ) = IUniswapV3likePool(pool)
            .slot0();
    }

    function getTickSpacing(
        address pool
    ) internal view override returns (int24) {
        return IUniswapV3likePool(pool).tickSpacing();
    }

    function getLiquidity(
        address pool
    ) internal view override returns (uint128) {
        return IUniswapV3likePool(pool).liquidity();
    }

    function nextInitializedTickWithinOneWord(
        address poolAddress,
        int24 tick,
        int24 tickSpacing,
        bool zeroForOne
    ) internal view override returns (int24 next, bool initialized) {
        return
            TickBitmap.nextInitializedTickWithinOneWord(
                poolAddress,
                tick,
                tickSpacing,
                zeroForOne
            );
    }

    function getTicks(
        address pool,
        int24 tick
    )
        internal
        view
        override
        returns (
            uint128 liquidityTotal,
            int128 liquidityDelta,
            uint256 outerFeeGrowth0Token,
            uint256 outerFeeGrowth1Token,
            int56 outerTickCumulative,
            uint160 outerSecondsPerLiquidity,
            uint32 outerSecondsSpent,
            bool initialized
        )
    {
        return IUniswapV3likePool(pool).ticks(tick);
    }
}
