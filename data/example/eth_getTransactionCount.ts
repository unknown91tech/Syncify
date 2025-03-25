import { ApiExampleData } from '../types';

/**
 * Ethereum eth_getTransactionCount API examples
 */
const eth_getTransactionCount: ApiExampleData[] = [
  {
    method: "POST",
    endpoint: "https://face-server-wine.vercel.app/api/v1/ethereum/eth_getTransactionCount",
    description: "Returns the number of transactions sent from an address.",
    requestBody: JSON.stringify({
      "chain": "Ethereum",
      "jsonrpc": "2.0",
      "id": 1,
      "method": "eth_getTransactionCount",
      "params": [
        "0xc94770007dda54cF92009BFF0dE90c06F603a09f", 
        "latest"
      ],
      "network": "Mainnet"
    }, null, 2),
    response: JSON.stringify({
      "jsonrpc": "2.0",
      "id": 1,
      "result": "0x1"
    }, null, 2)
  }
];

export default eth_getTransactionCount;