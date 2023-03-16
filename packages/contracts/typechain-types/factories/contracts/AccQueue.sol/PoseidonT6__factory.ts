/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  PoseidonT6,
  PoseidonT6Interface,
} from "../../../contracts/AccQueue.sol/PoseidonT6";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[5]",
        name: "input",
        type: "uint256[5]",
      },
    ],
    name: "hash5",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x61011661003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80639cfced97146038575b600080fd5b60496043366004605b565b50600090565b60405190815260200160405180910390f35b600060a08284031215606c57600080fd5b82601f830112607a57600080fd5b60405160a081016001600160401b038111828210171560a957634e487b7160e01b600052604160045260246000fd5b6040528060a084018581111560bd57600080fd5b845b8181101560d557803583526020928301920160bf565b50919594505050505056fea264697066735822122062b87d71fe656c0a44edb906d7bfcdb8a91cf1017d896b4d8364319b995693b564736f6c634300080a0033";

type PoseidonT6ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PoseidonT6ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PoseidonT6__factory extends ContractFactory {
  constructor(...args: PoseidonT6ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PoseidonT6> {
    return super.deploy(overrides || {}) as Promise<PoseidonT6>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PoseidonT6 {
    return super.attach(address) as PoseidonT6;
  }
  override connect(signer: Signer): PoseidonT6__factory {
    return super.connect(signer) as PoseidonT6__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PoseidonT6Interface {
    return new utils.Interface(_abi) as PoseidonT6Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoseidonT6 {
    return new Contract(address, _abi, signerOrProvider) as PoseidonT6;
  }
}