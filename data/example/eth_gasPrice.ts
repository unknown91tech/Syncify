import { ApiExampleData } from '../types';

/**
 * Ethereum eth_gasPrice API examples
 */
const eth_gasPrice: ApiExampleData[] = [
  {
    method: "POST",
    endpoint: "https://face-server-wine.vercel.app/api/v1/ethereum/eth_gasPrice",
    description: "Returns the current price per gas in wei.",
    requestBody: JSON.stringify({
      "chain": "Ethereum",
      "jsonrpc": "2.0",
      "id": 1,
      "method": "eth_gasPrice",
      "params": [],
      "network": "Mainnet"
    }, null, 2),
    response: JSON.stringify({
      "jsonrpc": "2.0",
      "id": 1,
      "result": "0x4a817c800"
    }, null, 2)
  }
];

export default eth_gasPrice;