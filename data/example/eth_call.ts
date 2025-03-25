import { ApiExampleData } from '../types';

/**
 * Ethereum eth_call API examples
 */
const eth_call: ApiExampleData[] = [
  {
    method: "POST",
    endpoint: "https://face-server-wine.vercel.app/api/v1/ethereum/eth_call",
    description: "Executes a new message call immediately without creating a transaction on the blockchain.",
    requestBody: JSON.stringify({
      "chain": "Ethereum",
      "jsonrpc": "2.0",
      "id": 1,
      "method": "eth_call",
      "params": [
        {
          "to": "0x6b175474e89094c44da98b954eedeac495271d0f", // DAI contract
          "data": "0x70a08231000000000000000000000000b5347a9c41a9aba410ce1cc6a92f356873f24bf3" // balanceOf function for a specific address
        },
        "latest"
      ],
      "network": "Mainnet"
    }, null, 2),
    response: JSON.stringify({
      "jsonrpc": "2.0",
      "id": 1,
      "result": "0x00000000000000000000000000000000000000000000000d8d726b7177a80000" // Value encoded as uint256
    }, null, 2)
  }
];

export default eth_call;