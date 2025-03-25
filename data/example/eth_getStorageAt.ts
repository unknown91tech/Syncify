import { ApiExampleData } from '../types';

/**
 * Ethereum eth_getStorageAt API examples
 */
const eth_getStorageAt: ApiExampleData[] = [
  {
    method: "POST",
    endpoint: "https://face-server-wine.vercel.app/api/v1/ethereum/eth_getStorageAt",
    description: "Returns the value from a storage position at a given address.",
    requestBody: JSON.stringify({
      "chain": "Ethereum",
      "jsonrpc": "2.0",
      "id": 1,
      "method": "eth_getStorageAt",
      "params": [
        "0x6b175474e89094c44da98b954eedeac495271d0f", // DAI contract
        "0x0",
        "latest"
      ],
      "network": "Mainnet"
    }, null, 2),
    response: JSON.stringify({
      "jsonrpc": "2.0",
      "id": 1,
      "result": "0x0000000000000000000000000000000000000000000000000000000000000001"
    }, null, 2)
  }
];

export default eth_getStorageAt;