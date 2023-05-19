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
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IRecipientRegistryInterface extends utils.Interface {
  functions: {
    "getRecipientAddress(uint256,uint256,uint256)": FunctionFragment;
    "setMaxRecipients(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getRecipientAddress",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxRecipients",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getRecipientAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxRecipients",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IRecipientRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IRecipientRegistryInterface;

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
    getRecipientAddress(
      _index: BigNumberish,
      _startBlock: BigNumberish,
      _endBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setMaxRecipients(
      _maxRecipients: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getRecipientAddress(
    _index: BigNumberish,
    _startBlock: BigNumberish,
    _endBlock: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  setMaxRecipients(
    _maxRecipients: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getRecipientAddress(
      _index: BigNumberish,
      _startBlock: BigNumberish,
      _endBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    setMaxRecipients(
      _maxRecipients: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    getRecipientAddress(
      _index: BigNumberish,
      _startBlock: BigNumberish,
      _endBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setMaxRecipients(
      _maxRecipients: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getRecipientAddress(
      _index: BigNumberish,
      _startBlock: BigNumberish,
      _endBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setMaxRecipients(
      _maxRecipients: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
