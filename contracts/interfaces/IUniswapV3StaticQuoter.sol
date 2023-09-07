// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.7.5;
pragma abicoder v2;

interface IUniswapV3StaticQuoter {
    /// @notice Returns the amount out received for a given exact input swap without executing the swap
    /// @param path The path of the swap, i.e. each token pair and the pool fee
    /// @param amountIn The amount of the first token to swap
    /// @return amountOut The amount of the last token that would be received
    function quoteExactInput(
        bytes memory path,
        uint256 amountIn
    ) external view returns (uint256 amountOut);

    struct QuoteExactInputSingleParams {
        address tokenIn;
        address tokenOut;
        uint256 amountIn;
        uint24 fee;
        uint160 sqrtPriceLimitX96;
    }

    /// @notice Returns the amount out received for a given exact input but for a swap of a single pool
    /// @param params The params for the quote, encoded as `QuoteExactInputSingleParams`
    /// tokenIn The token being swapped in
    /// tokenOut The token being swapped out
    /// fee The fee of the token pool to consider for the pair
    /// amountIn The desired input amount
    /// sqrtPriceLimitX96 The price limit of the pool that cannot be exceeded by the swap
    /// @return amountOut The amount of `tokenOut` that would be received
    function quoteExactInputSingle(
        QuoteExactInputSingleParams memory params
    ) external view returns (uint256 amountOut);

    /// @notice Returns the amount in needed for a given exact output swap without executing the swap
    /// @param path The path of the swap, i.e. each token pair and the pool fee
    /// @param amountOut The amount of the last token that would be received
    /// @return amountIn The amount of the first token to swap
    function quoteExactOutput(
        bytes memory path,
        uint256 amountOut
    ) external view returns (uint256 amountIn);

    struct QuoteExactOutputSingleParams {
        address tokenIn;
        address tokenOut;
        uint256 amount;
        uint24 fee;
        uint160 sqrtPriceLimitX96;
    }

    /// @notice Returns the amount in needed for a given exact output but for a swap of a single pool
    /// @param params The params for the quote, encoded as `QuoteExactOutputSingleParams`
    /// tokenIn The token being swapped in
    /// tokenOut The token being swapped out
    /// fee The fee of the token pool to consider for the pair
    /// amountOut The desired output amount
    /// sqrtPriceLimitX96 The price limit of the pool that cannot be exceeded by the swap
    /// @return amountIn The amount of `tokenIn` that would be needed
    function quoteExactOutputSingle(
        QuoteExactOutputSingleParams memory params
    ) external view returns (uint256 amountIn);
}
