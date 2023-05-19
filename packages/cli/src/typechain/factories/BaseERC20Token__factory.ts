/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BaseERC20Token,
  BaseERC20TokenInterface,
} from "../BaseERC20Token";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000c8b38038062000c8b83398101604081905262000034916200025d565b6040518060400160405280601381526020017f416e79206f6c6420455243323020746f6b656e0000000000000000000000000081525060405180604001604052806003815260200162414f4560e81b81525081600390805190602001906200009e929190620001b7565b508051620000b4906004906020840190620001b7565b505050620000c93382620000d060201b60201c565b5062000318565b6001600160a01b038216620001025760405162461bcd60e51b8152600401620000f99062000276565b60405180910390fd5b6200011060008383620001b2565b8060026000828254620001249190620002b6565b90915550506001600160a01b0382166000908152602081905260408120805483929062000153908490620002b6565b90915550506040516001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9062000198908590620002ad565b60405180910390a3620001ae60008383620001b2565b5050565b505050565b828054620001c590620002db565b90600052602060002090601f016020900481019282620001e9576000855562000234565b82601f106200020457805160ff191683800117855562000234565b8280016001018555821562000234579182015b828111156200023457825182559160200191906001019062000217565b506200024292915062000246565b5090565b5b8082111562000242576000815560010162000247565b6000602082840312156200026f578081fd5b5051919050565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b90815260200190565b60008219821115620002d657634e487b7160e01b81526011600452602481fd5b500190565b600281046001821680620002f057607f821691505b602082108114156200031257634e487b7160e01b600052602260045260246000fd5b50919050565b61096380620003286000396000f3fe608060405234801561001057600080fd5b50600436106100995760003560e01c806306fdde031461009e578063095ea7b3146100bc57806318160ddd146100dc57806323b872dd146100f1578063313ce56714610104578063395093511461011957806370a082311461012c57806395d89b411461013f578063a457c2d714610147578063a9059cbb1461015a578063dd62ed3e1461016d575b600080fd5b6100a6610180565b6040516100b39190610694565b60405180910390f35b6100cf6100ca366004610660565b610212565b6040516100b39190610689565b6100e4610234565b6040516100b391906108b7565b6100cf6100ff366004610625565b61023a565b61010c610268565b6040516100b391906108c0565b6100cf610127366004610660565b61026d565b6100e461013a3660046105d2565b6102b9565b6100a66102d8565b6100cf610155366004610660565b6102e7565b6100cf610168366004610660565b610351565b6100e461017b3660046105f3565b610369565b60606003805461018f906108f2565b80601f01602080910402602001604051908101604052809291908181526020018280546101bb906108f2565b80156102085780601f106101dd57610100808354040283529160200191610208565b820191906000526020600020905b8154815290600101906020018083116101eb57829003601f168201915b5050505050905090565b60008061021d610394565b905061022a818585610398565b5060019392505050565b60025490565b600080610245610394565b905061025285828561044c565b61025d858585610496565b506001949350505050565b601290565b600080610278610394565b6001600160a01b0380821660009081526001602090815260408083209389168352929052205490915061022a90829086906102b49087906108ce565b610398565b6001600160a01b0381166000908152602081905260409020545b919050565b60606004805461018f906108f2565b6000806102f2610394565b6001600160a01b03808216600090815260016020908152604080832093891683529290522054909150838110156103445760405162461bcd60e51b815260040161033b90610872565b60405180910390fd5b61025d8286868403610398565b60008061035c610394565b905061022a818585610496565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b3390565b6001600160a01b0383166103be5760405162461bcd60e51b815260040161033b9061082e565b6001600160a01b0382166103e45760405162461bcd60e51b815260040161033b9061072a565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061043f9085906108b7565b60405180910390a3505050565b60006104588484610369565b9050600019811461049057818110156104835760405162461bcd60e51b815260040161033b9061076c565b6104908484848403610398565b50505050565b6001600160a01b0383166104bc5760405162461bcd60e51b815260040161033b906107e9565b6001600160a01b0382166104e25760405162461bcd60e51b815260040161033b906106e7565b6104ed8383836105b6565b6001600160a01b038316600090815260208190526040902054818110156105265760405162461bcd60e51b815260040161033b906107a3565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061055d9084906108ce565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516105a791906108b7565b60405180910390a36104908484845b505050565b80356001600160a01b03811681146102d357600080fd5b6000602082840312156105e3578081fd5b6105ec826105bb565b9392505050565b60008060408385031215610605578081fd5b61060e836105bb565b915061061c602084016105bb565b90509250929050565b600080600060608486031215610639578081fd5b610642846105bb565b9250610650602085016105bb565b9150604084013590509250925092565b60008060408385031215610672578182fd5b61067b836105bb565b946020939093013593505050565b901515815260200190565b6000602080835283518082850152825b818110156106c0578581018301518582016040015282016106a4565b818111156106d15783604083870101525b50601f01601f1916929092016040019392505050565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b6020808252601d908201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604082015260600190565b60208082526026908201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604082015265616c616e636560d01b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526025908201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604082015264207a65726f60d81b606082015260800190565b90815260200190565b60ff91909116815260200190565b600082198211156108ed57634e487b7160e01b81526011600452602481fd5b500190565b60028104600182168061090657607f821691505b6020821081141561092757634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212201b4c7b93215f1fa06f8f38180ce6f01bbdaf9098f4172f40975e5b3c410a1dbd64736f6c63430008010033";

type BaseERC20TokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BaseERC20TokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BaseERC20Token__factory extends ContractFactory {
  constructor(...args: BaseERC20TokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BaseERC20Token> {
    return super.deploy(
      initialSupply,
      overrides || {}
    ) as Promise<BaseERC20Token>;
  }
  getDeployTransaction(
    initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(initialSupply, overrides || {});
  }
  attach(address: string): BaseERC20Token {
    return super.attach(address) as BaseERC20Token;
  }
  connect(signer: Signer): BaseERC20Token__factory {
    return super.connect(signer) as BaseERC20Token__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaseERC20TokenInterface {
    return new utils.Interface(_abi) as BaseERC20TokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseERC20Token {
    return new Contract(address, _abi, signerOrProvider) as BaseERC20Token;
  }
}