import { ApiExampleData } from '../types';

/**
 * Ethereum eth_getLogs API examples
 */
const eth_getLogs: ApiExampleData[] = [
  {
    method: "POST",
    endpoint: "https://face-server-wine.vercel.app/api/v1/ethereum/eth_getLogs",
    description: "Returns an array of all logs matching a given filter object.",
    requestBody: JSON.stringify({
      "chain": "Ethereum",
      "jsonrpc": "2.0",
      "id": 1,
      "method": "eth_getLogs",
      "params": [
        {
          "fromBlock": "0x429d3b",
          "toBlock": "0x429d3b",
          "address": "0x6b175474e89094c44da98b954eedeac495271d0f", // DAI contract
          "topics": [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef" // Transfer event topic
          ]
        }
      ],
      "network": "Mainnet"
    }, null, 2),
    response: JSON.stringify({
      "jsonrpc": "2.0",
      "id": 1,
      "result": [
        {
          "address": "0x6b175474e89094c44da98b954eedeac495271d0f",
          "blockHash": "0x8243343df08b9751f5ca0c5f8c9c0460d8a9b6351066fae0acbd4d3e776de8bb",
          "blockNumber": "0x429d3b",
          "data": "0x00000000000000000000000000000000000000000000000000000002540be400",
          "logIndex": "0x0",
          "removed": false,
          "topics": [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "0x0000000000000000000000006c6bc977e13df9b0de53b251522280bb72383700",
            "0x000000000000000000000000ad0135af20fa82e106607257143d0060a7eb5cbf"
          ],
          "transactionHash": "0x267d37fccfb6968c1f3760f2a36d11d966ac56af85211916266348565d01ef24",
          "transactionIndex": "0x2"
        },
        {
          "address": "0x6b175474e89094c44da98b954eedeac495271d0f",
          "blockHash": "0x8243343df08b9751f5ca0c5f8c9c0460d8a9b6351066fae0acbd4d3e776de8bb",
          "blockNumber": "0x429d3b",
          "data": "0x0000000000000000000000000000000000000000000000008ac7230489e80000",
          "logIndex": "0x1",
          "removed": false,
          "topics": [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "0x000000000000000000000000b7d07003e91a6f663ef9123c5c96b08ff34c5c38",
            "0x0000000000000000000000008cf23cd535a240eb0ab8667d24eedbd9eccd5cba"
          ],
          "transactionHash": "0x574f868fa49c7bb39b8376bb1e30d17c5d95afa3f7a43be8ef6f0b6c0726323a",
          "transactionIndex": "0x3"
        }
      ]
    }, null, 2)
  }
];

export default eth_getLogs;