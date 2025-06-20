/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { PeripheryImmutableStateTest } from "../PeripheryImmutableStateTest";

export class PeripheryImmutableStateTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _factory: string,
    _WETH9: string,
    overrides?: Overrides
  ): Promise<PeripheryImmutableStateTest> {
    return super.deploy(
      _factory,
      _WETH9,
      overrides || {}
    ) as Promise<PeripheryImmutableStateTest>;
  }
  getDeployTransaction(
    _factory: string,
    _WETH9: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_factory, _WETH9, overrides || {});
  }
  attach(address: string): PeripheryImmutableStateTest {
    return super.attach(address) as PeripheryImmutableStateTest;
  }
  connect(signer: Signer): PeripheryImmutableStateTest__factory {
    return super.connect(signer) as PeripheryImmutableStateTest__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PeripheryImmutableStateTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PeripheryImmutableStateTest;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_WETH9",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "WETH9",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516102253803806102258339818101604052604081101561003357600080fd5b508051602090910151610046828261004d565b5050610153565b600054610100900460ff16806100665750610066610132565b80610074575060005460ff16155b6100af5760405162461bcd60e51b815260040180806020018281038252602e8152602001806101f7602e913960400191505060405180910390fd5b600054610100900460ff161580156100da576000805460ff1961ff0019909116610100171660011790555b6000805462010000600160b01b031916620100006001600160a01b038681169190910291909117909155600180546001600160a01b031916918416919091179055801561012d576000805461ff00191690555b505050565b60006101473061014d60201b6100831760201c565b15905090565b3b151590565b6096806101616000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80634aa4a4fc146037578063c45a0155146059575b600080fd5b603d605f565b604080516001600160a01b039092168252519081900360200190f35b603d606e565b6001546001600160a01b031681565b6000546201000090046001600160a01b031681565b3b15159056fea164736f6c6343000706000a496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564";
