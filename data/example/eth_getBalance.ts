import { ApiExampleData } from '../types';

/**
 * Ethereum eth_getBalance API examples
 */
const eth_getBalance: ApiExampleData[] = [
  {
    method: "POST",
    endpoint: "https://face-server-wine.vercel.app/api/v1/ethereum/eth_getBalance",
    description: "Returns the balance of the account of given address.",
    requestBody: JSON.stringify({
      "chain": "Ethereum",
      "jsonrpc": "2.0",
      "id": 1,
      "method": "eth_getBalance",
      "params": [
        "0xc94770007dda54cF92009BFF0dE90c06F603a09f",
        "latest"
      ],
      "network": "Mainnet"
    }, null, 2),
    response: JSON.stringify({
      "jsonrpc": "2.0",
      "id": 1,
      "result": "0x0234c8a3397aab58"
    }, null, 2)
  }
];

export default eth_getBalance;