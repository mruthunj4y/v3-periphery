/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { NonfungiblePositionManagerPositionsGasTest } from "../NonfungiblePositionManagerPositionsGasTest";

export class NonfungiblePositionManagerPositionsGasTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _nonfungiblePositionManager: string,
    overrides?: Overrides
  ): Promise<NonfungiblePositionManagerPositionsGasTest> {
    return super.deploy(
      _nonfungiblePositionManager,
      overrides || {}
    ) as Promise<NonfungiblePositionManagerPositionsGasTest>;
  }
  getDeployTransaction(
    _nonfungiblePositionManager: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _nonfungiblePositionManager,
      overrides || {}
    );
  }
  attach(address: string): NonfungiblePositionManagerPositionsGasTest {
    return super.attach(address) as NonfungiblePositionManagerPositionsGasTest;
  }
  connect(signer: Signer): NonfungiblePositionManagerPositionsGasTest__factory {
    return super.connect(
      signer
    ) as NonfungiblePositionManagerPositionsGasTest__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NonfungiblePositionManagerPositionsGasTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as NonfungiblePositionManagerPositionsGasTest;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract INonfungiblePositionManager",
        name: "_nonfungiblePositionManager",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getGasCostOfPositions",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161016a38038061016a8339818101604052602081101561003357600080fd5b5051606081901b6001600160601b0319166080526001600160a01b031661010461006660003980606152506101046000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063994ea42c14602d575b600080fd5b604760048036036020811015604157600080fd5b50356059565b60408051918252519081900360200190f35b6000805a90507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166399fbab88846040518263ffffffff1660e01b8152600401808281526020019150506101806040518083038186803b15801560c357600080fd5b505afa15801560d6573d6000803e3d6000fd5b505050506040513d61018081101560ec57600080fd5b50505a90039291505056fea164736f6c6343000706000a";
