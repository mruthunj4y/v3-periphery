/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { LiquidityAmountsTest } from "../LiquidityAmountsTest";

export class LiquidityAmountsTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<LiquidityAmountsTest> {
    return super.deploy(overrides || {}) as Promise<LiquidityAmountsTest>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LiquidityAmountsTest {
    return super.attach(address) as LiquidityAmountsTest;
  }
  connect(signer: Signer): LiquidityAmountsTest__factory {
    return super.connect(signer) as LiquidityAmountsTest__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LiquidityAmountsTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LiquidityAmountsTest;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtRatioAX96",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtRatioBX96",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
    ],
    name: "getAmount0ForLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtRatioAX96",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtRatioBX96",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
    ],
    name: "getAmount1ForLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtRatioX96",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtRatioAX96",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtRatioBX96",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
    ],
    name: "getAmountsForLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtRatioAX96",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtRatioBX96",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
    ],
    name: "getGasCostOfGetAmount0ForLiquidity",
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
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtRatioAX96",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtRatioBX96",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
    ],
    name: "getGasCostOfGetAmount1ForLiquidity",
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
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtRatioX96",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtRatioAX96",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtRatioBX96",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
    ],
    name: "getGasCostOfGetAmountsForLiquidity",
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
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtRatioAX96",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtRatioBX96",
        type: "uint160",
      },
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
    ],
    name: "getGasCostOfGetLiquidityForAmount0",
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
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtRatioAX96",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtRatioBX96",
        type: "uint160",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    name: "getGasCostOfGetLiquidityForAmount1",
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
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtRatioX96",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtRatioAX96",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtRatioBX96",
        type: "uint160",
      },
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    name: "getGasCostOfGetLiquidityForAmounts",
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
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtRatioAX96",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtRatioBX96",
        type: "uint160",
      },
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
    ],
    name: "getLiquidityForAmount0",
    outputs: [
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtRatioAX96",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtRatioBX96",
        type: "uint160",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    name: "getLiquidityForAmount1",
    outputs: [
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtRatioX96",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtRatioAX96",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtRatioBX96",
        type: "uint160",
      },
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    name: "getLiquidityForAmounts",
    outputs: [
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061086e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063bf1d2c7111610071578063bf1d2c7114610255578063c72e160b14610295578063cb1b9496146102f4578063d22462091461032a578063e26274bd14610360578063f7212103146103a6576100b4565b806308c0f795146100b9578063290984621461010b57806329e24cb71461015d5780636098fd4a1461019d57806367df6e89146101df5780636ac69a8e14610215575b600080fd5b6100ef600480360360608110156100cf57600080fd5b506001600160a01b038135811691602081013590911690604001356103e8565b604080516001600160801b039092168252519081900360200190f35b61014b6004803603606081101561012157600080fd5b5080356001600160a01b0390811691602081013590911690604001356001600160801b03166103ff565b60408051918252519081900360200190f35b61014b6004803603606081101561017357600080fd5b5080356001600160a01b0390811691602081013590911690604001356001600160801b031661041c565b6100ef600480360360a08110156101b357600080fd5b506001600160a01b03813581169160208101358216916040820135169060608101359060800135610429565b6100ef600480360360608110156101f557600080fd5b506001600160a01b03813581169160208101359091169060400135610444565b61014b6004803603606081101561022b57600080fd5b5080356001600160a01b0390811691602081013590911690604001356001600160801b0316610451565b61014b6004803603606081101561026b57600080fd5b5080356001600160a01b0390811691602081013590911690604001356001600160801b031661045e565b6102db600480360360808110156102ab57600080fd5b5080356001600160a01b0390811691602081013582169160408201351690606001356001600160801b0316610478565b6040805192835260208301919091528051918290030190f35b61014b6004803603606081101561030a57600080fd5b506001600160a01b03813581169160208101359091169060400135610495565b61014b6004803603606081101561034057600080fd5b506001600160a01b038135811691602081013590911690604001356104a6565b61014b6004803603608081101561037657600080fd5b5080356001600160a01b0390811691602081013582169160408201351690606001356001600160801b03166104b7565b61014b600480360360a08110156103bc57600080fd5b506001600160a01b038135811691602081013582169160408201351690606081013590608001356104d7565b60006103f58484846104f8565b90505b9392505050565b6000805a905061041085858561053a565b505a9003949350505050565b60006103f58484846105a3565b600061043886868686866105e6565b90505b95945050505050565b60006103f584848461069e565b60006103f584848461053a565b6000805a90506104108585856001600160801b03166104f8565b600080610487868686866106fc565b915091505b94509492505050565b6000805a90506104108585856104f8565b6000805a905061041085858561069e565b6000805a90506104c9868686866106fc565b50505a900395945050505050565b6000805a90506104ea87878787876105e6565b505a90039695505050505050565b6000826001600160a01b0316846001600160a01b03161115610518579192915b6103f561053583600160601b8787036001600160a01b0316610797565b610846565b6000826001600160a01b0316846001600160a01b0316111561055a579192915b836001600160a01b0316610593606060ff16846001600160801b0316901b8686036001600160a01b0316866001600160a01b0316610797565b8161059a57fe5b04949350505050565b6000826001600160a01b0316846001600160a01b031611156105c3579192915b6103f5826001600160801b03168585036001600160a01b0316600160601b610797565b6000836001600160a01b0316856001600160a01b03161115610606579293925b846001600160a01b0316866001600160a01b0316116106315761062a85858561069e565b905061043b565b836001600160a01b0316866001600160a01b0316101561069357600061065887868661069e565b905060006106678789866104f8565b9050806001600160801b0316826001600160801b031610610688578061068a565b815b9250505061043b565b6104388585846104f8565b6000826001600160a01b0316846001600160a01b031611156106be579192915b60006106e1856001600160a01b0316856001600160a01b0316600160601b610797565b905061043b61053584838888036001600160a01b0316610797565b600080836001600160a01b0316856001600160a01b0316111561071d579293925b846001600160a01b0316866001600160a01b0316116107485761074185858561053a565b915061048c565b836001600160a01b0316866001600160a01b031610156107815761076d86858561053a565b915061077a8587856105a3565b905061048c565b61078c8585856105a3565b905094509492505050565b60008080600019858709868602925082811090839003039050806107cd57600084116107c257600080fd5b5082900490506103f8565b8084116107d957600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b806001600160801b038116811461085c57600080fd5b91905056fea164736f6c6343000706000a";
