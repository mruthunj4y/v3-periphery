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

interface ProxyAdminInterface extends ethers.utils.Interface {
  functions: {
    "changeProxyAdmin(address,address)": FunctionFragment;
    "getProxyAdmin(address)": FunctionFragment;
    "getProxyImplementation(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "upgrade(address,address)": FunctionFragment;
    "upgradeAndCall(address,address,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "changeProxyAdmin",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getProxyAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getProxyImplementation",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "upgrade",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeAndCall",
    values: [string, string, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "changeProxyAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProxyAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProxyImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgrade", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeAndCall",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class ProxyAdmin extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ProxyAdminInterface;

  functions: {
    changeProxyAdmin(
      proxy: string,
      newAdmin: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "changeProxyAdmin(address,address)"(
      proxy: string,
      newAdmin: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getProxyAdmin(
      proxy: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getProxyAdmin(address)"(
      proxy: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getProxyImplementation(
      proxy: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getProxyImplementation(address)"(
      proxy: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    owner(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "owner()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    upgrade(
      proxy: string,
      implementation: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "upgrade(address,address)"(
      proxy: string,
      implementation: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    upgradeAndCall(
      proxy: string,
      implementation: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "upgradeAndCall(address,address,bytes)"(
      proxy: string,
      implementation: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;
  };

  changeProxyAdmin(
    proxy: string,
    newAdmin: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "changeProxyAdmin(address,address)"(
    proxy: string,
    newAdmin: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getProxyAdmin(proxy: string, overrides?: CallOverrides): Promise<string>;

  "getProxyAdmin(address)"(
    proxy: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getProxyImplementation(
    proxy: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "getProxyImplementation(address)"(
    proxy: string,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  upgrade(
    proxy: string,
    implementation: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "upgrade(address,address)"(
    proxy: string,
    implementation: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  upgradeAndCall(
    proxy: string,
    implementation: string,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "upgradeAndCall(address,address,bytes)"(
    proxy: string,
    implementation: string,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  callStatic: {
    changeProxyAdmin(
      proxy: string,
      newAdmin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "changeProxyAdmin(address,address)"(
      proxy: string,
      newAdmin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getProxyAdmin(proxy: string, overrides?: CallOverrides): Promise<string>;

    "getProxyAdmin(address)"(
      proxy: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getProxyImplementation(
      proxy: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "getProxyImplementation(address)"(
      proxy: string,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgrade(
      proxy: string,
      implementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "upgrade(address,address)"(
      proxy: string,
      implementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeAndCall(
      proxy: string,
      implementation: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "upgradeAndCall(address,address,bytes)"(
      proxy: string,
      implementation: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    changeProxyAdmin(
      proxy: string,
      newAdmin: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "changeProxyAdmin(address,address)"(
      proxy: string,
      newAdmin: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getProxyAdmin(proxy: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getProxyAdmin(address)"(
      proxy: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProxyImplementation(
      proxy: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getProxyImplementation(address)"(
      proxy: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    upgrade(
      proxy: string,
      implementation: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "upgrade(address,address)"(
      proxy: string,
      implementation: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    upgradeAndCall(
      proxy: string,
      implementation: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "upgradeAndCall(address,address,bytes)"(
      proxy: string,
      implementation: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    changeProxyAdmin(
      proxy: string,
      newAdmin: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "changeProxyAdmin(address,address)"(
      proxy: string,
      newAdmin: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getProxyAdmin(
      proxy: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getProxyAdmin(address)"(
      proxy: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProxyImplementation(
      proxy: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getProxyImplementation(address)"(
      proxy: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    upgrade(
      proxy: string,
      implementation: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "upgrade(address,address)"(
      proxy: string,
      implementation: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    upgradeAndCall(
      proxy: string,
      implementation: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "upgradeAndCall(address,address,bytes)"(
      proxy: string,
      implementation: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;
  };
}
