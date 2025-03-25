import { ApiExampleData } from '../types';

/**
 * Ethereum eth_chainId API examples
 */
const eth_chainId: ApiExampleData[] = [
  {
    method: "POST",
    endpoint: "https://face-server-wine.vercel.app/api/v1/ethereum/eth_chainId",
    description: "Returns the currently configured chain ID, a value used in replay-protected transaction signing.",
    requestBody: JSON.stringify({
      "chain": "Ethereum",
      "jsonrpc": "2.0",
      "id": 1,
      "method": "eth_chainId",
      "params": [],
      "network": "Mainnet"
    }, null, 2),
    response: JSON.stringify({
      "jsonrpc": "2.0",
      "id": 1,
      "result": "0x1" // Chain ID 1 for Ethereum Mainnet
    }, null, 2)
  }
];

export default eth_chainId;