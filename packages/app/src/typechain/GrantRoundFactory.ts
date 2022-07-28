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

export type MaxValuesStruct = {
  maxMessages: BigNumberish;
  maxVoteOptions: BigNumberish;
};

export type MaxValuesStructOutput = [BigNumber, BigNumber] & {
  maxMessages: BigNumber;
  maxVoteOptions: BigNumber;
};

export type TreeDepthsStruct = {
  intStateTreeDepth: BigNumberish;
  messageTreeSubDepth: BigNumberish;
  messageTreeDepth: BigNumberish;
  voteOptionTreeDepth: BigNumberish;
};

export type TreeDepthsStructOutput = [number, number, number, number] & {
  intStateTreeDepth: number;
  messageTreeSubDepth: number;
  messageTreeDepth: number;
  voteOptionTreeDepth: number;
};

export type BatchSizesStruct = {
  messageBatchSize: BigNumberish;
  tallyBatchSize: BigNumberish;
};

export type BatchSizesStructOutput = [number, number] & {
  messageBatchSize: number;
  tallyBatchSize: number;
};

export type PubKeyStruct = { x: BigNumberish; y: BigNumberish };

export type PubKeyStructOutput = [BigNumber, BigNumber] & {
  x: BigNumber;
  y: BigNumber;
};

export interface GrantRoundFactoryInterface extends utils.Interface {
  functions: {
    "deployGrantRound(uint256,address,address,uint256,(uint256,uint256),(uint8,uint8,uint8,uint8),(uint8,uint8),(uint256,uint256),address,address,address)": FunctionFragment;
    "hash2(uint256[2])": FunctionFragment;
    "hash3(uint256[3])": FunctionFragment;
    "hash4(uint256[4])": FunctionFragment;
    "hash5(uint256[5])": FunctionFragment;
    "hashLeftRight(uint256,uint256)": FunctionFragment;
    "messageAqFactory()": FunctionFragment;
    "owner()": FunctionFragment;
    "recipientRegistry()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setMessageAqFactory(address)": FunctionFragment;
    "setRecipientRegistry(address)": FunctionFragment;
    "sha256Hash(uint256[])": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "deployGrantRound",
    values: [
      BigNumberish,
      string,
      string,
      BigNumberish,
      MaxValuesStruct,
      TreeDepthsStruct,
      BatchSizesStruct,
      PubKeyStruct,
      string,
      string,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "hash2",
    values: [[BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "hash3",
    values: [[BigNumberish, BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "hash4",
    values: [[BigNumberish, BigNumberish, BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "hash5",
    values: [
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "hashLeftRight",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "messageAqFactory",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recipientRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMessageAqFactory",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setRecipientRegistry",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "sha256Hash",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "deployGrantRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hash2", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hash3", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hash4", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hash5", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hashLeftRight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "messageAqFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recipientRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMessageAqFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRecipientRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sha256Hash", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "MessageAqFactoryChanged(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RecipientRegistryChanged(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MessageAqFactoryChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RecipientRegistryChanged"): EventFragment;
}

export type MessageAqFactoryChangedEvent = TypedEvent<
  [string],
  { _messageAqFactory: string }
>;

export type MessageAqFactoryChangedEventFilter =
  TypedEventFilter<MessageAqFactoryChangedEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type RecipientRegistryChangedEvent = TypedEvent<
  [string],
  { _recipientRegistry: string }
>;

export type RecipientRegistryChangedEventFilter =
  TypedEventFilter<RecipientRegistryChangedEvent>;

export interface GrantRoundFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GrantRoundFactoryInterface;

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
    deployGrantRound(
      _voiceCreditFactor: BigNumberish,
      _coordinator: string,
      _nativeToken: string,
      _duration: BigNumberish,
      _maxValues: MaxValuesStruct,
      _treeDepths: TreeDepthsStruct,
      _batchSizes: BatchSizesStruct,
      _coordinatorPubKey: PubKeyStruct,
      _vkRegistry: string,
      _maci: string,
      _grantRoundOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hash2(
      array: [BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hash3(
      array: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hash4(
      array: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hash5(
      array: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hashLeftRight(
      _left: BigNumberish,
      _right: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    messageAqFactory(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    recipientRegistry(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMessageAqFactory(
      _messageAqFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRecipientRegistry(
      _recipientRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sha256Hash(
      array: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  deployGrantRound(
    _voiceCreditFactor: BigNumberish,
    _coordinator: string,
    _nativeToken: string,
    _duration: BigNumberish,
    _maxValues: MaxValuesStruct,
    _treeDepths: TreeDepthsStruct,
    _batchSizes: BatchSizesStruct,
    _coordinatorPubKey: PubKeyStruct,
    _vkRegistry: string,
    _maci: string,
    _grantRoundOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hash2(
    array: [BigNumberish, BigNumberish],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hash3(
    array: [BigNumberish, BigNumberish, BigNumberish],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hash4(
    array: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hash5(
    array: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hashLeftRight(
    _left: BigNumberish,
    _right: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  messageAqFactory(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  recipientRegistry(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMessageAqFactory(
    _messageAqFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRecipientRegistry(
    _recipientRegistry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sha256Hash(
    array: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    deployGrantRound(
      _voiceCreditFactor: BigNumberish,
      _coordinator: string,
      _nativeToken: string,
      _duration: BigNumberish,
      _maxValues: MaxValuesStruct,
      _treeDepths: TreeDepthsStruct,
      _batchSizes: BatchSizesStruct,
      _coordinatorPubKey: PubKeyStruct,
      _vkRegistry: string,
      _maci: string,
      _grantRoundOwner: string,
      overrides?: CallOverrides
    ): Promise<string>;

    hash2(
      array: [BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hash3(
      array: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hash4(
      array: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hash5(
      array: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashLeftRight(
      _left: BigNumberish,
      _right: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    messageAqFactory(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    recipientRegistry(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setMessageAqFactory(
      _messageAqFactory: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setRecipientRegistry(
      _recipientRegistry: string,
      overrides?: CallOverrides
    ): Promise<void>;

    sha256Hash(
      array: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "MessageAqFactoryChanged(address)"(
      _messageAqFactory?: null
    ): MessageAqFactoryChangedEventFilter;
    MessageAqFactoryChanged(
      _messageAqFactory?: null
    ): MessageAqFactoryChangedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "RecipientRegistryChanged(address)"(
      _recipientRegistry?: null
    ): RecipientRegistryChangedEventFilter;
    RecipientRegistryChanged(
      _recipientRegistry?: null
    ): RecipientRegistryChangedEventFilter;
  };

  estimateGas: {
    deployGrantRound(
      _voiceCreditFactor: BigNumberish,
      _coordinator: string,
      _nativeToken: string,
      _duration: BigNumberish,
      _maxValues: MaxValuesStruct,
      _treeDepths: TreeDepthsStruct,
      _batchSizes: BatchSizesStruct,
      _coordinatorPubKey: PubKeyStruct,
      _vkRegistry: string,
      _maci: string,
      _grantRoundOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hash2(
      array: [BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hash3(
      array: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hash4(
      array: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hash5(
      array: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashLeftRight(
      _left: BigNumberish,
      _right: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    messageAqFactory(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    recipientRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMessageAqFactory(
      _messageAqFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRecipientRegistry(
      _recipientRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sha256Hash(
      array: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deployGrantRound(
      _voiceCreditFactor: BigNumberish,
      _coordinator: string,
      _nativeToken: string,
      _duration: BigNumberish,
      _maxValues: MaxValuesStruct,
      _treeDepths: TreeDepthsStruct,
      _batchSizes: BatchSizesStruct,
      _coordinatorPubKey: PubKeyStruct,
      _vkRegistry: string,
      _maci: string,
      _grantRoundOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hash2(
      array: [BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hash3(
      array: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hash4(
      array: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hash5(
      array: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hashLeftRight(
      _left: BigNumberish,
      _right: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    messageAqFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recipientRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMessageAqFactory(
      _messageAqFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRecipientRegistry(
      _recipientRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sha256Hash(
      array: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
