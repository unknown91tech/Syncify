import { ApiExampleData } from '../types';

/**
 * Ethereum Block Number API examples
 */
const eth_accounts: ApiExampleData[] = [
  {
    method: "POST",
    endpoint: "https://face-server-wine.vercel.app/api/v1/ethereum/eth_accounts",
    description: "Returns an account addresses owned by the client",
    requestBody: JSON.stringify({
      "chain": "Ethereum",
      "id": 1,
      "jsonrpc": "2.0",
      "method": "eth_accounts",
      "network": "Mainnet"
    }, null, 2),
    response: JSON.stringify({
        "jsonrpc": "2.0",
        "id": 1,
        "result": []
    }, null, 2)
  }
];

export default eth_accounts;