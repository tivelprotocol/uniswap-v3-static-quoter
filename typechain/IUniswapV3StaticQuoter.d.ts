/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IUniswapV3StaticQuoterInterface extends ethers.utils.Interface {
  functions: {
    "quoteExactInput(bytes,uint256)": FunctionFragment;
    "quoteExactInputSingle(tuple)": FunctionFragment;
    "quoteExactOutput(bytes,uint256)": FunctionFragment;
    "quoteExactOutputSingle(tuple)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "quoteExactInput",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteExactInputSingle",
    values: [
      {
        tokenIn: string;
        tokenOut: string;
        amountIn: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteExactOutput",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteExactOutputSingle",
    values: [
      {
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      }
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "quoteExactInput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteExactInputSingle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteExactOutput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteExactOutputSingle",
    data: BytesLike
  ): Result;

  events: {};
}

export class IUniswapV3StaticQuoter extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IUniswapV3StaticQuoterInterface;

  functions: {
    quoteExactInput(
      path: BytesLike,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountOut: BigNumber }>;

    "quoteExactInput(bytes,uint256)"(
      path: BytesLike,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountOut: BigNumber }>;

    quoteExactInputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        amountIn: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountOut: BigNumber }>;

    "quoteExactInputSingle((address,address,uint256,uint24,uint160))"(
      params: {
        tokenIn: string;
        tokenOut: string;
        amountIn: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountOut: BigNumber }>;

    quoteExactOutput(
      path: BytesLike,
      amountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountIn: BigNumber }>;

    "quoteExactOutput(bytes,uint256)"(
      path: BytesLike,
      amountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountIn: BigNumber }>;

    quoteExactOutputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountIn: BigNumber }>;

    "quoteExactOutputSingle((address,address,uint256,uint24,uint160))"(
      params: {
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountIn: BigNumber }>;
  };

  quoteExactInput(
    path: BytesLike,
    amountIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "quoteExactInput(bytes,uint256)"(
    path: BytesLike,
    amountIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  quoteExactInputSingle(
    params: {
      tokenIn: string;
      tokenOut: string;
      amountIn: BigNumberish;
      fee: BigNumberish;
      sqrtPriceLimitX96: BigNumberish;
    },
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "quoteExactInputSingle((address,address,uint256,uint24,uint160))"(
    params: {
      tokenIn: string;
      tokenOut: string;
      amountIn: BigNumberish;
      fee: BigNumberish;
      sqrtPriceLimitX96: BigNumberish;
    },
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  quoteExactOutput(
    path: BytesLike,
    amountOut: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "quoteExactOutput(bytes,uint256)"(
    path: BytesLike,
    amountOut: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  quoteExactOutputSingle(
    params: {
      tokenIn: string;
      tokenOut: string;
      amount: BigNumberish;
      fee: BigNumberish;
      sqrtPriceLimitX96: BigNumberish;
    },
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "quoteExactOutputSingle((address,address,uint256,uint24,uint160))"(
    params: {
      tokenIn: string;
      tokenOut: string;
      amount: BigNumberish;
      fee: BigNumberish;
      sqrtPriceLimitX96: BigNumberish;
    },
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    quoteExactInput(
      path: BytesLike,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "quoteExactInput(bytes,uint256)"(
      path: BytesLike,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quoteExactInputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        amountIn: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "quoteExactInputSingle((address,address,uint256,uint24,uint160))"(
      params: {
        tokenIn: string;
        tokenOut: string;
        amountIn: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quoteExactOutput(
      path: BytesLike,
      amountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "quoteExactOutput(bytes,uint256)"(
      path: BytesLike,
      amountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quoteExactOutputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "quoteExactOutputSingle((address,address,uint256,uint24,uint160))"(
      params: {
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    quoteExactInput(
      path: BytesLike,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "quoteExactInput(bytes,uint256)"(
      path: BytesLike,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quoteExactInputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        amountIn: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "quoteExactInputSingle((address,address,uint256,uint24,uint160))"(
      params: {
        tokenIn: string;
        tokenOut: string;
        amountIn: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quoteExactOutput(
      path: BytesLike,
      amountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "quoteExactOutput(bytes,uint256)"(
      path: BytesLike,
      amountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quoteExactOutputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "quoteExactOutputSingle((address,address,uint256,uint24,uint160))"(
      params: {
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    quoteExactInput(
      path: BytesLike,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "quoteExactInput(bytes,uint256)"(
      path: BytesLike,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    quoteExactInputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        amountIn: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "quoteExactInputSingle((address,address,uint256,uint24,uint160))"(
      params: {
        tokenIn: string;
        tokenOut: string;
        amountIn: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    quoteExactOutput(
      path: BytesLike,
      amountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "quoteExactOutput(bytes,uint256)"(
      path: BytesLike,
      amountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    quoteExactOutputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "quoteExactOutputSingle((address,address,uint256,uint24,uint160))"(
      params: {
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
