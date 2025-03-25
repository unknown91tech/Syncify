import { ApiExampleData } from '../types';

/**
 * Ethereum Block Number API examples
 */
const eth_blockNumber: ApiExampleData[] = [
  {
    method: "POST",
    endpoint: "https://face-server-wine.vercel.app/api/v1/ethereum/eth_blockNumber",
    description: "Is essential for analyzing block activity and transaction volume, providing a quick count of transactions within a given block",
    requestBody: JSON.stringify({
      "chain": "Ethereum",
      "jsonrpc": "2.0",
      "id": 1,
      "method": "eth_blockNumber",
      "params": [],
      "network": "Mainnet"
    }, null, 2),
    response: JSON.stringify({
      "jsonrpc": "2.0",
      "id": 1,
      "result": "0x10c1f3c"
    }, null, 2)
  }
];

export default eth_blockNumber;