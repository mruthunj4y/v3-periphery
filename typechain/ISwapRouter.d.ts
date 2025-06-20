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
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ISwapRouterInterface extends ethers.utils.Interface {
  functions: {
    "exactInput(tuple)": FunctionFragment;
    "exactInputSingle(tuple)": FunctionFragment;
    "exactOutput(tuple)": FunctionFragment;
    "exactOutputSingle(tuple)": FunctionFragment;
    "swapCallback(int256,int256,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "exactInput",
    values: [
      {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "exactInputSingle",
    values: [
      {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "exactOutput",
    values: [
      {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "exactOutputSingle",
    values: [
      {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapCallback",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "exactInput", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exactInputSingle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exactOutput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exactOutputSingle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapCallback",
    data: BytesLike
  ): Result;

  events: {};
}

export class ISwapRouter extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ISwapRouterInterface;

  functions: {
    exactInput(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "exactInput(tuple)"(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    exactInputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "exactInputSingle(tuple)"(
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    exactOutput(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "exactOutput(tuple)"(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    exactOutputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "exactOutputSingle(tuple)"(
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    swapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "swapCallback(int256,int256,bytes)"(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  exactInput(
    params: {
      path: BytesLike;
      recipient: string;
      deadline: BigNumberish;
      amountIn: BigNumberish;
      amountOutMinimum: BigNumberish;
    },
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "exactInput(tuple)"(
    params: {
      path: BytesLike;
      recipient: string;
      deadline: BigNumberish;
      amountIn: BigNumberish;
      amountOutMinimum: BigNumberish;
    },
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  exactInputSingle(
    params: {
      tokenIn: string;
      tokenOut: string;
      fee: BigNumberish;
      recipient: string;
      deadline: BigNumberish;
      amountIn: BigNumberish;
      amountOutMinimum: BigNumberish;
      sqrtPriceLimitX96: BigNumberish;
    },
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "exactInputSingle(tuple)"(
    params: {
      tokenIn: string;
      tokenOut: string;
      fee: BigNumberish;
      recipient: string;
      deadline: BigNumberish;
      amountIn: BigNumberish;
      amountOutMinimum: BigNumberish;
      sqrtPriceLimitX96: BigNumberish;
    },
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  exactOutput(
    params: {
      path: BytesLike;
      recipient: string;
      deadline: BigNumberish;
      amountOut: BigNumberish;
      amountInMaximum: BigNumberish;
    },
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "exactOutput(tuple)"(
    params: {
      path: BytesLike;
      recipient: string;
      deadline: BigNumberish;
      amountOut: BigNumberish;
      amountInMaximum: BigNumberish;
    },
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  exactOutputSingle(
    params: {
      tokenIn: string;
      tokenOut: string;
      fee: BigNumberish;
      recipient: string;
      deadline: BigNumberish;
      amountOut: BigNumberish;
      amountInMaximum: BigNumberish;
      sqrtPriceLimitX96: BigNumberish;
    },
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "exactOutputSingle(tuple)"(
    params: {
      tokenIn: string;
      tokenOut: string;
      fee: BigNumberish;
      recipient: string;
      deadline: BigNumberish;
      amountOut: BigNumberish;
      amountInMaximum: BigNumberish;
      sqrtPriceLimitX96: BigNumberish;
    },
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  swapCallback(
    amount0Delta: BigNumberish,
    amount1Delta: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "swapCallback(int256,int256,bytes)"(
    amount0Delta: BigNumberish,
    amount1Delta: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    exactInput(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "exactInput(tuple)"(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exactInputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "exactInputSingle(tuple)"(
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exactOutput(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "exactOutput(tuple)"(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exactOutputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "exactOutputSingle(tuple)"(
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "swapCallback(int256,int256,bytes)"(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    exactInput(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "exactInput(tuple)"(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    exactInputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "exactInputSingle(tuple)"(
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    exactOutput(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "exactOutput(tuple)"(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    exactOutputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "exactOutputSingle(tuple)"(
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    swapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "swapCallback(int256,int256,bytes)"(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    exactInput(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "exactInput(tuple)"(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    exactInputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "exactInputSingle(tuple)"(
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    exactOutput(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "exactOutput(tuple)"(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    exactOutputSingle(
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "exactOutputSingle(tuple)"(
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    swapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "swapCallback(int256,int256,bytes)"(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
