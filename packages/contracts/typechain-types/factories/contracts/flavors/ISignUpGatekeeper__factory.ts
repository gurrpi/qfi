/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ISignUpGatekeeper,
  ISignUpGatekeeperInterface,
} from "../../../contracts/flavors/ISignUpGatekeeper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ISignUpGatekeeper__factory {
  static readonly abi = _abi;
  static createInterface(): ISignUpGatekeeperInterface {
    return new utils.Interface(_abi) as ISignUpGatekeeperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISignUpGatekeeper {
    return new Contract(address, _abi, signerOrProvider) as ISignUpGatekeeper;
  }
}
