/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type G1PointStruct = { x: BigNumberish; y: BigNumberish };

export type G1PointStructOutput = [BigNumber, BigNumber] & {
  x: BigNumber;
  y: BigNumber;
};

export type G2PointStruct = {
  x: [BigNumberish, BigNumberish];
  y: [BigNumberish, BigNumberish];
};

export type G2PointStructOutput = [
  [BigNumber, BigNumber],
  [BigNumber, BigNumber]
] & { x: [BigNumber, BigNumber]; y: [BigNumber, BigNumber] };

export type VerifyingKeyStruct = {
  alpha1: G1PointStruct;
  beta2: G2PointStruct;
  gamma2: G2PointStruct;
  delta2: G2PointStruct;
  ic: G1PointStruct[];
};

export type VerifyingKeyStructOutput = [
  G1PointStructOutput,
  G2PointStructOutput,
  G2PointStructOutput,
  G2PointStructOutput,
  G1PointStructOutput[]
] & {
  alpha1: G1PointStructOutput;
  beta2: G2PointStructOutput;
  gamma2: G2PointStructOutput;
  delta2: G2PointStructOutput;
  ic: G1PointStructOutput[];
};

export interface VkRegistryInterface extends utils.Interface {
  functions: {
    "genProcessVkSig(uint256,uint256,uint256,uint256)": FunctionFragment;
    "genTallyVkSig(uint256,uint256,uint256)": FunctionFragment;
    "getProcessVk(uint256,uint256,uint256,uint256)": FunctionFragment;
    "getProcessVkBySig(uint256)": FunctionFragment;
    "getTallyVk(uint256,uint256,uint256)": FunctionFragment;
    "getTallyVkBySig(uint256)": FunctionFragment;
    "hasProcessVk(uint256,uint256,uint256,uint256)": FunctionFragment;
    "hasTallyVk(uint256,uint256,uint256)": FunctionFragment;
    "isProcessVkSet(uint256)": FunctionFragment;
    "isTallyVkSet(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setVerifyingKeys(uint256,uint256,uint256,uint256,uint256,((uint256,uint256),(uint256[2],uint256[2]),(uint256[2],uint256[2]),(uint256[2],uint256[2]),(uint256,uint256)[]),((uint256,uint256),(uint256[2],uint256[2]),(uint256[2],uint256[2]),(uint256[2],uint256[2]),(uint256,uint256)[]))": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "genProcessVkSig",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "genTallyVkSig",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getProcessVk",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getProcessVkBySig",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTallyVk",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTallyVkBySig",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "hasProcessVk",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "hasTallyVk",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isProcessVkSet",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isTallyVkSet",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setVerifyingKeys",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      VerifyingKeyStruct,
      VerifyingKeyStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "genProcessVkSig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "genTallyVkSig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProcessVk",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProcessVkBySig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTallyVk", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTallyVkBySig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasProcessVk",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasTallyVk", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isProcessVkSet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTallyVkSet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVerifyingKeys",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface VkRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VkRegistryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    genProcessVkSig(
      _stateTreeDepth: BigNumberish,
      _messageTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      _messageBatchSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    genTallyVkSig(
      _stateTreeDepth: BigNumberish,
      _intStateTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getProcessVk(
      _stateTreeDepth: BigNumberish,
      _messageTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      _messageBatchSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[VerifyingKeyStructOutput]>;

    getProcessVkBySig(
      _sig: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[VerifyingKeyStructOutput]>;

    getTallyVk(
      _stateTreeDepth: BigNumberish,
      _intStateTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[VerifyingKeyStructOutput]>;

    getTallyVkBySig(
      _sig: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[VerifyingKeyStructOutput]>;

    hasProcessVk(
      _stateTreeDepth: BigNumberish,
      _messageTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      _messageBatchSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    hasTallyVk(
      _stateTreeDepth: BigNumberish,
      _intStateTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isProcessVkSet(
      _sig: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isTallyVkSet(
      _sig: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setVerifyingKeys(
      _stateTreeDepth: BigNumberish,
      _intStateTreeDepth: BigNumberish,
      _messageTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      _messageBatchSize: BigNumberish,
      _processVk: VerifyingKeyStruct,
      _tallyVk: VerifyingKeyStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  genProcessVkSig(
    _stateTreeDepth: BigNumberish,
    _messageTreeDepth: BigNumberish,
    _voteOptionTreeDepth: BigNumberish,
    _messageBatchSize: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  genTallyVkSig(
    _stateTreeDepth: BigNumberish,
    _intStateTreeDepth: BigNumberish,
    _voteOptionTreeDepth: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getProcessVk(
    _stateTreeDepth: BigNumberish,
    _messageTreeDepth: BigNumberish,
    _voteOptionTreeDepth: BigNumberish,
    _messageBatchSize: BigNumberish,
    overrides?: CallOverrides
  ): Promise<VerifyingKeyStructOutput>;

  getProcessVkBySig(
    _sig: BigNumberish,
    overrides?: CallOverrides
  ): Promise<VerifyingKeyStructOutput>;

  getTallyVk(
    _stateTreeDepth: BigNumberish,
    _intStateTreeDepth: BigNumberish,
    _voteOptionTreeDepth: BigNumberish,
    overrides?: CallOverrides
  ): Promise<VerifyingKeyStructOutput>;

  getTallyVkBySig(
    _sig: BigNumberish,
    overrides?: CallOverrides
  ): Promise<VerifyingKeyStructOutput>;

  hasProcessVk(
    _stateTreeDepth: BigNumberish,
    _messageTreeDepth: BigNumberish,
    _voteOptionTreeDepth: BigNumberish,
    _messageBatchSize: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  hasTallyVk(
    _stateTreeDepth: BigNumberish,
    _intStateTreeDepth: BigNumberish,
    _voteOptionTreeDepth: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isProcessVkSet(
    _sig: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isTallyVkSet(_sig: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setVerifyingKeys(
    _stateTreeDepth: BigNumberish,
    _intStateTreeDepth: BigNumberish,
    _messageTreeDepth: BigNumberish,
    _voteOptionTreeDepth: BigNumberish,
    _messageBatchSize: BigNumberish,
    _processVk: VerifyingKeyStruct,
    _tallyVk: VerifyingKeyStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    genProcessVkSig(
      _stateTreeDepth: BigNumberish,
      _messageTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      _messageBatchSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    genTallyVkSig(
      _stateTreeDepth: BigNumberish,
      _intStateTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProcessVk(
      _stateTreeDepth: BigNumberish,
      _messageTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      _messageBatchSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<VerifyingKeyStructOutput>;

    getProcessVkBySig(
      _sig: BigNumberish,
      overrides?: CallOverrides
    ): Promise<VerifyingKeyStructOutput>;

    getTallyVk(
      _stateTreeDepth: BigNumberish,
      _intStateTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<VerifyingKeyStructOutput>;

    getTallyVkBySig(
      _sig: BigNumberish,
      overrides?: CallOverrides
    ): Promise<VerifyingKeyStructOutput>;

    hasProcessVk(
      _stateTreeDepth: BigNumberish,
      _messageTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      _messageBatchSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    hasTallyVk(
      _stateTreeDepth: BigNumberish,
      _intStateTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isProcessVkSet(
      _sig: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isTallyVkSet(
      _sig: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setVerifyingKeys(
      _stateTreeDepth: BigNumberish,
      _intStateTreeDepth: BigNumberish,
      _messageTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      _messageBatchSize: BigNumberish,
      _processVk: VerifyingKeyStruct,
      _tallyVk: VerifyingKeyStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    genProcessVkSig(
      _stateTreeDepth: BigNumberish,
      _messageTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      _messageBatchSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    genTallyVkSig(
      _stateTreeDepth: BigNumberish,
      _intStateTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProcessVk(
      _stateTreeDepth: BigNumberish,
      _messageTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      _messageBatchSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProcessVkBySig(
      _sig: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTallyVk(
      _stateTreeDepth: BigNumberish,
      _intStateTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTallyVkBySig(
      _sig: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasProcessVk(
      _stateTreeDepth: BigNumberish,
      _messageTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      _messageBatchSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasTallyVk(
      _stateTreeDepth: BigNumberish,
      _intStateTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isProcessVkSet(
      _sig: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTallyVkSet(
      _sig: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setVerifyingKeys(
      _stateTreeDepth: BigNumberish,
      _intStateTreeDepth: BigNumberish,
      _messageTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      _messageBatchSize: BigNumberish,
      _processVk: VerifyingKeyStruct,
      _tallyVk: VerifyingKeyStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    genProcessVkSig(
      _stateTreeDepth: BigNumberish,
      _messageTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      _messageBatchSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    genTallyVkSig(
      _stateTreeDepth: BigNumberish,
      _intStateTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProcessVk(
      _stateTreeDepth: BigNumberish,
      _messageTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      _messageBatchSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProcessVkBySig(
      _sig: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTallyVk(
      _stateTreeDepth: BigNumberish,
      _intStateTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTallyVkBySig(
      _sig: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasProcessVk(
      _stateTreeDepth: BigNumberish,
      _messageTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      _messageBatchSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasTallyVk(
      _stateTreeDepth: BigNumberish,
      _intStateTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isProcessVkSet(
      _sig: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTallyVkSet(
      _sig: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setVerifyingKeys(
      _stateTreeDepth: BigNumberish,
      _intStateTreeDepth: BigNumberish,
      _messageTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      _messageBatchSize: BigNumberish,
      _processVk: VerifyingKeyStruct,
      _tallyVk: VerifyingKeyStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
