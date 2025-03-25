import { ApiExampleData } from '../types';

/**
 * Ethereum eth_getCode API examples
 */
const eth_getCode: ApiExampleData[] = [
  {
    method: "POST",
    endpoint: "https://face-server-wine.vercel.app/api/v1/ethereum/eth_getCode",
    description: "Returns code at a given address.",
    requestBody: JSON.stringify({
      "chain": "Ethereum",
      "jsonrpc": "2.0",
      "id": 1,
      "method": "eth_getCode",
      "params": [
        "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b", 
        "latest"
      ],
      "network": "Mainnet"
    }, null, 2),
    response: JSON.stringify({
      "jsonrpc": "2.0",
      "id": 1,
      "result": "0x606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680634555d5c91461005c5780635c60da1b146100855780638be0079c146100dc575b600080fd5b341561006757600080fd5b61006f610135565b6040518082815260200191505060405180910390f35b341561009057600080fd5b61009861013a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156100e757600080fd5b6100ef610164565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600081565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050905600a165627a7a723058201cd39a3ef105a43fb9d5a171be11c7759b405b7fe85f38bec8adb9693b7a18620029"
    }, null, 2)
  }
];

export default eth_getCode;