import { ApiExampleData } from '../types';

/**
 * Ethereum eth_getTransactionReceipt API examples
 */
const eth_getTransactionReceipt: ApiExampleData[] = [
  {
    method: "POST",
    endpoint: "https://face-server-wine.vercel.app/api/v1/ethereum/eth_getTransactionReceipt",
    description: "Returns the receipt of a transaction by transaction hash.",
    requestBody: JSON.stringify({
      "chain": "Ethereum",
      "jsonrpc": "2.0",
      "id": 1,
      "method": "eth_getTransactionReceipt",
      "params": [
        "0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238"
      ],
      "network": "Mainnet"
    }, null, 2),
    response: JSON.stringify({
      "jsonrpc": "2.0",
      "id": 1,
      "result": {
        "transactionHash": "0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238",
        "transactionIndex": "0x1",
        "blockNumber": "0xb",
        "blockHash": "0xc6ef2fc5426d6ad6fd9e2a26abeab0aa2411b7ab17f30a99d3cb96aed1d1055b",
        "cumulativeGasUsed": "0x33bc",
        "gasUsed": "0x4dc",
        "contractAddress": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
        "logs": [],
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "status": "0x1",
        "effectiveGasPrice": "0x4a817c800"
      }
    }, null, 2)
  }
];

export default eth_getTransactionReceipt;