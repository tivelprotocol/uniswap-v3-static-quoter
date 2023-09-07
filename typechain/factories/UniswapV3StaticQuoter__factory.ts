/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { UniswapV3StaticQuoter } from "../UniswapV3StaticQuoter";

export class UniswapV3StaticQuoter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _factory: string,
    overrides?: Overrides
  ): Promise<UniswapV3StaticQuoter> {
    return super.deploy(
      _factory,
      overrides || {}
    ) as Promise<UniswapV3StaticQuoter>;
  }
  getDeployTransaction(
    _factory: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_factory, overrides || {});
  }
  attach(address: string): UniswapV3StaticQuoter {
    return super.attach(address) as UniswapV3StaticQuoter;
  }
  connect(signer: Signer): UniswapV3StaticQuoter__factory {
    return super.connect(signer) as UniswapV3StaticQuoter__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV3StaticQuoter {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UniswapV3StaticQuoter;
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
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "poolAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
      {
        internalType: "int256",
        name: "amountSpecified",
        type: "int256",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceLimitX96",
        type: "uint160",
      },
    ],
    name: "quote",
    outputs: [
      {
        internalType: "int256",
        name: "amount0",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "amount1",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "path",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "quoteExactInput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenOut",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountIn",
            type: "uint256",
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24",
          },
          {
            internalType: "uint160",
            name: "sqrtPriceLimitX96",
            type: "uint160",
          },
        ],
        internalType:
          "struct IUniswapV3StaticQuoter.QuoteExactInputSingleParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "quoteExactInputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "path",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "quoteExactOutput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenOut",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24",
          },
          {
            internalType: "uint160",
            name: "sqrtPriceLimitX96",
            type: "uint160",
          },
        ],
        internalType:
          "struct IUniswapV3StaticQuoter.QuoteExactOutputSingleParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "quoteExactOutputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051620023aa380380620023aa83398101604081905261003191610046565b60601b6001600160601b031916608052610074565b600060208284031215610057578081fd5b81516001600160a01b038116811461006d578182fd5b9392505050565b60805160601c6123186200009260003980610e5352506123186000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80632f80bb1d1461005c57806390405d3614610085578063bd21704a146100a6578063c6a5026a146100b9578063cdca1753146100cc575b600080fd5b61006f61006a3660046121e6565b6100df565b60405161007c919061229d565b60405180910390f35b610098610093366004612190565b61017f565b60405161007c92919061228f565b61006f6100b4366004612274565b61043d565b61006f6100c7366004612274565b6104e8565b61006f6100da3660046121e6565b610565565b60005b60008060006100f0866105ef565b9250925092506101466040518060a00160405280846001600160a01b03168152602001856001600160a01b031681526020018781526020018362ffffff16815260200160006001600160a01b031681525061043d565b945061015186610620565b156101665761015f86610628565b9550610171565b849350505050610179565b5050506100e2565b92915050565b600080836101d4576040805162461bcd60e51b815260206004820152601e60248201527f616d6f756e745370656369666965642063616e6e6f74206265207a65726f0000604482015290519081900360640190fd5b60008085139080806101e88a8a8a8a61063f565b9250925092505b8051158015906102155750866001600160a01b031681604001516001600160a01b031614155b156104065761022261206a565b60408201516001600160a01b031681526060820151610244908c90868d6106d2565b6001600160a01b031660608401819052901515604080850191909152600292830b90920b60208401529083015161029291610281908d908c61072f565b6080850151855161ffff881661077c565b60c085015260a084015260808301526001600160a01b0316604083015284156102f4576102c88160c0015182608001510161096e565b825103825260a08101516102ea906102df9061096e565b602084015190610984565b602083015261032f565b6103018160a0015161096e565b825101825260c081015160808201516103299161031e910161096e565b60208401519061099a565b60208301525b80606001516001600160a01b031682604001516001600160a01b031614156103c55780604001511561039c57600061036b8c83602001516109b0565b5050505050509150508a1561037e576000035b61038c836080015182610a77565b6001600160801b03166080840152505b896103ab5780602001516103b4565b60018160200151035b600290810b900b6060830152610400565b80600001516001600160a01b031682604001516001600160a01b031614610400576103f38260400151610b2d565b600290810b900b60608301525b506101ef565b8315158915151461041f5760208101518151890361042c565b8060000151880381602001515b909b909a5098505050505050505050565b6020810151815160608301516000926001600160a01b03808216908416109284926104689290610e4c565b90506000806104cb838561047f896040015161096e565b60000389608001516001600160a01b03166000146104a1578960800151610093565b876104c05773fffd8963efd1fc6a506488495d951d5263988d25610093565b6401000276a461017f565b91509150836104da57806104dc565b815b9450505050505b919050565b6020810151815160608301516000926001600160a01b03808216908416109284926105139290610e4c565b9050600080610547838561052a896040015161096e565b60808a01516001600160a01b0316156104a1578960800151610093565b915091508361055957816000036104dc565b60000395945050505050565b60005b6000806000610576866105ef565b9250925092506105cc6040518060a00160405280856001600160a01b03168152602001846001600160a01b031681526020018781526020018362ffffff16815260200160006001600160a01b03168152506104e8565b94506105d786610620565b15610166576105e586610628565b9550505050610568565b600080806105fd8482610e82565b925061060a846014610f32565b9050610617846017610e82565b91509193909250565b516042111590565b805160609061017990839060179060161901610fd9565b60008061064a6120a6565b60006106558861112a565b905061066687868360000151611233565b61066f88611304565b9350806040015192506040518060a001604052808781526020016000815260200182600001516001600160a01b03168152602001826020015160020b81526020016106b98a611371565b6001600160801b03168152509150509450945094915050565b60008060006106e3878787876113ac565b9093509150620d89e719600284900b121561070457620d89e719925061071a565b620d89e8600284900b131561071a57620d89e892505b610723836113c8565b90509450945094915050565b60008361075057816001600160a01b0316836001600160a01b031611610766565b816001600160a01b0316836001600160a01b0316105b6107705782610772565b815b90505b9392505050565b60008080806001600160a01b03808916908a1610158187128015906108015760006107b58989620f42400362ffffff16620f42406116fa565b9050826107ce576107c98c8c8c60016117a9565b6107db565b6107db8b8d8c6001611824565b95508581106107ec578a96506107fb565b6107f88c8b83866118cf565b96505b5061084b565b81610818576108138b8b8b6000611824565b610825565b6108258a8c8b60006117a9565b93508388600003106108395789955061084b565b6108488b8a8a6000038561191b565b95505b6001600160a01b038a81169087161482156108ae5780801561086a5750815b6108805761087b878d8c6001611824565b610882565b855b955080801561088f575081155b6108a5576108a0878d8c60006117a9565b6108a7565b845b94506108f8565b8080156108b85750815b6108ce576108c98c888c60016117a9565b6108d0565b855b95508080156108dd575081155b6108f3576108ee8c888c6000611824565b6108f5565b845b94505b8115801561090857508860000385115b15610914578860000394505b81801561093357508a6001600160a01b0316876001600160a01b031614155b1561094257858903935061095f565b61095c868962ffffff168a620f42400362ffffff16611967565b93505b50505095509550955095915050565b6000600160ff1b821061098057600080fd5b5090565b8082038281131560008312151461017957600080fd5b8181018281121560008312151461017957600080fd5b600080600080600080600080896001600160a01b031663f30dba938a6040518263ffffffff1660e01b8152600401808260020b81526020019150506101006040518083038186803b158015610a0457600080fd5b505afa158015610a18573d6000803e3d6000fd5b505050506040513d610100811015610a2f57600080fd5b508051602082015160408301516060840151608085015160a086015160c087015160e090970151959e50939c50919a5098509650945090925090509295985092959890939650565b60008082600f0b1215610adc57826001600160801b03168260000384039150816001600160801b031610610ad7576040805162461bcd60e51b81526020600482015260026024820152614c5360f01b604482015290519081900360640190fd5b610179565b826001600160801b03168284019150816001600160801b03161015610179576040805162461bcd60e51b81526020600482015260026024820152614c4160f01b604482015290519081900360640190fd5b60006401000276a36001600160a01b03831610801590610b69575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b038316105b610b9e576040805162461bcd60e51b81526020600482015260016024820152602960f91b604482015290519081900360640190fd5b640100000000600160c01b03602083901b166001600160801b03811160071b81811c67ffffffffffffffff811160061b90811c63ffffffff811160051b90811c61ffff811160041b90811c60ff8111600390811b91821c600f811160021b90811c918211600190811b92831c97908811961790941790921717909117171760808110610c3257607f810383901c9150610c3c565b80607f0383901b91505b908002607f81811c60ff83811c9190911c800280831c81831c1c800280841c81841c1c800280851c81851c1c800280861c81861c1c800280871c81871c1c800280881c81881c1c800280891c81891c1c8002808a1c818a1c1c8002808b1c818b1c1c8002808c1c818c1c1c8002808d1c818d1c1c8002808e1c9c81901c9c909c1c80029c8d901c9e9d607f198f0160401b60c09190911c678000000000000000161760c19b909b1c674000000000000000169a909a1760c29990991c672000000000000000169890981760c39790971c671000000000000000169690961760c49590951c670800000000000000169490941760c59390931c670400000000000000169290921760c69190911c670200000000000000161760c79190911c670100000000000000161760c89190911c6680000000000000161760c99190911c6640000000000000161760ca9190911c6620000000000000161760cb9190911c6610000000000000161760cc9190911c6608000000000000161760cd9190911c66040000000000001617693627a301d71055774c8581026f028f6481ab7f045a5af012a19d003aa9198101608090811d906fdb2df09e81959a81455e260799a0632f8301901d600281810b9083900b14610e3d57886001600160a01b0316610e21826113c8565b6001600160a01b03161115610e365781610e38565b805b610e3f565b815b9998505050505050505050565b60006107727f0000000000000000000000000000000000000000000000000000000000000000610e7d8686866119a1565b6119f7565b600081826014011015610ed1576040805162461bcd60e51b8152602060048201526012602482015271746f416464726573735f6f766572666c6f7760701b604482015290519081900360640190fd5b8160140183511015610f22576040805162461bcd60e51b8152602060048201526015602482015274746f416464726573735f6f75744f66426f756e647360581b604482015290519081900360640190fd5b500160200151600160601b900490565b600081826003011015610f80576040805162461bcd60e51b8152602060048201526011602482015270746f55696e7432345f6f766572666c6f7760781b604482015290519081900360640190fd5b8160030183511015610fd0576040805162461bcd60e51b8152602060048201526014602482015273746f55696e7432345f6f75744f66426f756e647360601b604482015290519081900360640190fd5b50016003015190565b60608182601f011015611024576040805162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b604482015290519081900360640190fd5b82828401101561106c576040805162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b604482015290519081900360640190fd5b818301845110156110b8576040805162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b604482015290519081900360640190fd5b6060821580156110d75760405191506000825260208201604052611121565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156111105780518352602092830192016110f8565b5050858452601f01601f1916604052505b50949350505050565b6111326120d4565b816001600160a01b031663ddca3f436040518163ffffffff1660e01b815260040160206040518083038186803b15801561116b57600080fd5b505afa15801561117f573d6000803e3d6000fd5b505050506040513d602081101561119557600080fd5b505161ffff166040808301919091528051633850c7bd60e01b815290516001600160a01b03841691633850c7bd9160048083019260e0929190829003018186803b1580156111e257600080fd5b505afa1580156111f6573d6000803e3d6000fd5b505050506040513d60e081101561120c57600080fd5b508051602091820151600290810b900b918301919091526001600160a01b03168152919050565b60008361127c57816001600160a01b0316836001600160a01b0316118015611277575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b038416105b6112aa565b816001600160a01b0316836001600160a01b03161080156112aa57506401000276a36001600160a01b038416115b9050806112fe576040805162461bcd60e51b815260206004820152601c60248201527f7371727450726963654c696d6974206f7574206f6620626f756e647300000000604482015290519081900360640190fd5b50505050565b6000816001600160a01b031663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561133f57600080fd5b505afa158015611353573d6000803e3d6000fd5b505050506040513d602081101561136957600080fd5b505192915050565b6000816001600160a01b0316631a6865026040518163ffffffff1660e01b815260040160206040518083038186803b15801561133f57600080fd5b6000806113bb86868686611adb565b9150915094509492505050565b60008060008360020b126113df578260020b6113e7565b8260020b6000035b9050620d89e8811115611425576040805162461bcd60e51b81526020600482015260016024820152601560fa1b604482015290519081900360640190fd5b60006001821661143957600160801b61144b565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff169050600282161561147f576ffff97272373d413259a46990580e213a0260801c5b600482161561149e576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b60088216156114bd576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b60108216156114dc576fffcb9843d60f6159c9db58835c9266440260801c5b60208216156114fb576fff973b41fa98c081472e6896dfb254c00260801c5b604082161561151a576fff2ea16466c96a3843ec78b326b528610260801c5b6080821615611539576ffe5dee046a99a2a811c461f1969c30530260801c5b610100821615611559576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b610200821615611579576ff987a7253ac413176f2b074cf7815e540260801c5b610400821615611599576ff3392b0822b70005940c7a398e4b70f30260801c5b6108008216156115b9576fe7159475a2c29b7443b29c7fa6e889d90260801c5b6110008216156115d9576fd097f3bdfd2022b8845ad8f792aa58250260801c5b6120008216156115f9576fa9f746462d870fdf8a65dc1f90e061e50260801c5b614000821615611619576f70d869a156d2a1b890bb3df62baf32f70260801c5b618000821615611639576f31be135f97d08fd981231505542fcfa60260801c5b6201000082161561165a576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b6202000082161561167a576e5d6af8dedb81196699c329225ee6040260801c5b62040000821615611699576d2216e584f5fa1ea926041bedfe980260801c5b620800008216156116b6576b048a170391f7dc42444e8fa20260801c5b60008460020b13156116d15780600019816116cd57fe5b0490505b6401000000008106156116e55760016116e8565b60005b60ff16602082901c0192505050919050565b6000808060001985870986860292508281109083900303905080611730576000841161172557600080fd5b508290049050610775565b80841161173c57600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b6000836001600160a01b0316856001600160a01b031611156117c9579293925b816117f6576117f1836001600160801b03168686036001600160a01b0316600160601b6116fa565b611819565b611819836001600160801b03168686036001600160a01b0316600160601b611967565b90505b949350505050565b6000836001600160a01b0316856001600160a01b03161115611844579293925b600160601b600160e01b03606084901b166001600160a01b03868603811690871661186e57600080fd5b8361189e57866001600160a01b03166118918383896001600160a01b03166116fa565b8161189857fe5b046118c4565b6118c46118b58383896001600160a01b0316611967565b886001600160a01b0316611cd9565b979650505050505050565b600080856001600160a01b0316116118e657600080fd5b6000846001600160801b0316116118fc57600080fd5b8161190e576117f18585856001611ce4565b6118198585856001611dc5565b600080856001600160a01b03161161193257600080fd5b6000846001600160801b03161161194857600080fd5b8161195a576117f18585856000611dc5565b6118198585856000611ce4565b60006119748484846116fa565b90506000828061198057fe5b848609111561077557600019811061199757600080fd5b6001019392505050565b6119a96120d4565b826001600160a01b0316846001600160a01b031611156119c7579192915b50604080516060810182526001600160a01b03948516815292909316602083015262ffffff169181019190915290565b600081602001516001600160a01b031682600001516001600160a01b031610611a1f57600080fd5b50805160208083015160409384015184516001600160a01b0394851681850152939091168385015262ffffff166060808401919091528351808403820181526080840185528051908301206001600160f81b031960a085015294901b6bffffffffffffffffffffffff191660a183015260b58201939093527fe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b5460d5808301919091528251808303909101815260f5909101909152805191012090565b6000808581600286810b9088900b81611af057fe5b05905060008760020b128015611b1757508560020b8760020b81611b1057fe5b0760020b15155b15611b2157600019015b8415611bf857600080611b3383611ea8565b6040805163299ce14b60e11b8152600184810b6004830152915193955091935060ff84161b8001600019019160009183916001600160a01b03891691635339c296916024808301926020929190829003018186803b158015611b9457600080fd5b505afa158015611ba8573d6000803e3d6000fd5b505050506040513d6020811015611bbe57600080fd5b5051168015159750905086611bda57898360ff16860302611bed565b89611be482611eba565b840360ff168603025b975050505050611cce565b600080611c0783600101611ea8565b91509150600060018260ff166001901b03199050600081866001600160a01b0316635339c296866040518263ffffffff1660e01b8152600401808260010b815260200191505060206040518083038186803b158015611c6557600080fd5b505afa158015611c79573d6000803e3d6000fd5b505050506040513d6020811015611c8f57600080fd5b5051168015159750905086611cb157898360ff0360ff16866001010102611cc7565b8983611cbc83611f5a565b0360ff168660010101025b9750505050505b505094509492505050565b808204910615150190565b60008115611d575760006001600160a01b03841115611d1a57611d1584600160601b876001600160801b03166116fa565b611d32565b6001600160801b038516606085901b81611d3057fe5b045b9050611d4f611d4a6001600160a01b03881683612044565b612054565b91505061181c565b60006001600160a01b03841115611d8557611d8084600160601b876001600160801b0316611967565b611d9c565b611d9c606085901b6001600160801b038716611cd9565b905080866001600160a01b031611611db357600080fd5b6001600160a01b03861603905061181c565b600082611dd357508361181c565b600160601b600160e01b03606085901b168215611e61576001600160a01b03861684810290858281611e0157fe5b041415611e3257818101828110611e3057611e2683896001600160a01b031683611967565b935050505061181c565b505b611e5882611e53878a6001600160a01b03168681611e4c57fe5b0490612044565b611cd9565b9250505061181c565b6001600160a01b03861684810290858281611e7857fe5b04148015611e8557508082115b611e8e57600080fd5b808203611e26611d4a846001600160a01b038b1684611967565b60020b600881901d9161010090910790565b6000808211611ec857600080fd5b600160801b8210611edb57608091821c91015b680100000000000000008210611ef357604091821c91015b6401000000008210611f0757602091821c91015b620100008210611f1957601091821c91015b6101008210611f2a57600891821c91015b60108210611f3a57600491821c91015b60048210611f4a57600291821c91015b600282106104e357600101919050565b6000808211611f6857600080fd5b5060ff6001600160801b03821615611f8357607f1901611f8b565b608082901c91505b67ffffffffffffffff821615611fa457603f1901611fac565b604082901c91505b63ffffffff821615611fc157601f1901611fc9565b602082901c91505b61ffff821615611fdc57600f1901611fe4565b601082901c91505b60ff821615611ff65760071901611ffe565b600882901c91505b600f8216156120105760031901612018565b600482901c91505b600382161561202a5760011901612032565b600282901c91505b60018216156104e35760001901919050565b8082018281101561017957600080fd5b806001600160a01b03811681146104e357600080fd5b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915290565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b604080516060810182526000808252602082018190529181019190915290565b600060a08284031215612105578081fd5b60405160a0810181811067ffffffffffffffff8211171561212257fe5b6040529050808235612133816122ca565b81526020830135612143816122ca565b602082015260408381013590820152606083013562ffffff8116811461216857600080fd5b606082015261217960808401612185565b60808201525092915050565b80356104e3816122ca565b600080600080608085870312156121a5578384fd5b84356121b0816122ca565b9350602085013580151581146121c4578384fd5b92506040850135915060608501356121db816122ca565b939692955090935050565b600080604083850312156121f8578182fd5b823567ffffffffffffffff8082111561220f578384fd5b818501915085601f830112612222578384fd5b813560208282111561223057fe5b612242601f8301601f191682016122a6565b92508183528781838601011115612257578586fd5b818185018285013790820181019490945295939092013593505050565b600060a08284031215612285578081fd5b61077583836120f4565b918252602082015260400190565b90815260200190565b60405181810167ffffffffffffffff811182821017156122c257fe5b604052919050565b6001600160a01b03811681146122df57600080fd5b5056fea264697066735822122010aaa50db12e71483513c54f67c1501ec940c77a2b1eae9eb52a456c0756beab64736f6c63430007060033";