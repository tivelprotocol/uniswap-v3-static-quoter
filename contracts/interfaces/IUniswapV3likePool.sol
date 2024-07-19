// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity =0.7.6;

import "@uniswap/v3-core/contracts/interfaces/IUniswapV3Pool.sol";

interface IUniswapV3likePool is IUniswapV3Pool {
    // Ramses Exchange use this one instead of fee()
    function currentFee() external view returns (uint24);
}
