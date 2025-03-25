import { ApiExampleData } from '../types';

/**
 * Ethereum eth_estimateGas API examples
 */
const eth_estimateGas: ApiExampleData[] = [
  {
    method: "POST",
    endpoint: "https://face-server-wine.vercel.app/api/v1/ethereum/eth_estimateGas",
    description: "Generates and returns an estimate of how much gas is necessary to allow the transaction to complete.",
    requestBody: JSON.stringify({
      "chain": "Ethereum",
      "jsonrpc": "2.0",
      "id": 1,
      "method": "eth_estimateGas",
      "params": [
        {
          "from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
          "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
          "value": "0x9184e72a000",
          "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
        }
      ],
      "network": "Mainnet"
    }, null, 2),
    response: JSON.stringify({
      "jsonrpc": "2.0",
      "id": 1,
      "result": "0x5208" // 21000 gas in hex
    }, null, 2)
  }
];

export default eth_estimateGas;