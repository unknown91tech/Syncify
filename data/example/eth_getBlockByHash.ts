import { ApiExampleData } from '../types';

/**
 * Ethereum eth_getBlockByHash API examples
 */
const eth_getBlockByHash: ApiExampleData[] = [
  {
    method: "POST",
    endpoint: "https://face-server-wine.vercel.app/api/v1/ethereum/eth_getBlockByHash",
    description: "Returns information about a block by block hash.",
    requestBody: JSON.stringify({
      "chain": "Ethereum",
      "jsonrpc": "2.0",
      "id": 1,
      "method": "eth_getBlockByHash",
      "params": [
        "0x8243343df08b9751f5ca0c5f8c9c0460d8a9b6351066fae0acbd4d3e776de8bb",
        true
      ],
      "network": "Mainnet"
    }, null, 2),
    response: JSON.stringify({
      "jsonrpc": "2.0",
      "id": 1,
      "result": {
        "baseFeePerGas": "0x3b9aca00",
        "difficulty": "0x0",
        "extraData": "0x4e65746865726d696e64",
        "gasLimit": "0x1c9c380",
        "gasUsed": "0x1a79c44",
        "hash": "0x8243343df08b9751f5ca0c5f8c9c0460d8a9b6351066fae0acbd4d3e776de8bb",
        "logsBloom": "0x5622d884503012a00c824940a80200088a0422103010450800209610a32800410a043384200100a4f880b20c00c14a04424280030a02140230026b0810b400408000180c240014400101944c5082a5810002800809200e40001125020a0200581e400000120110a59b209200a08400028282800d40180800100a9400008000800c9001010004000800c04031a000408a2011940009848000002000e052042001008022000c00ac008400104420240100a440d9802040c10200a00001024e40124400c01900800084200200848200200412402b0045200d00090808000488401112070a08800204010082208220540008c",
        "miner": "0xab5801a7d398351b8be11c439e05c5b3259aec9b",
        "mixHash": "0x23a64ca3e1dcede2955ee8a3b5e4a913b1be3c2ceb631143c80f16ef92a7f608",
        "nonce": "0x0000000000000000",
        "number": "0x429d3b",
        "parentHash": "0x5a8de0406df8af8ede9ded5b7cd8e4fa48d0a2f6b60ac8100d979e5f6b30d496",
        "receiptsRoot": "0xfae83f81563d5664e3f1e5e50f2f7903f7030f8db1048e2c5ce3351c299ca64a",
        "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        "size": "0x11ac5",
        "stateRoot": "0x9ca8e1ddf0e65704c1d8593a2e8d0f9b2a91e99e8e84dbf850a6a16764d19852",
        "timestamp": "0x65fa4092",
        "totalDifficulty": "0xc70d815d562d3cfa955",
        "transactions": [
          {
            "blockHash": "0x8243343df08b9751f5ca0c5f8c9c0460d8a9b6351066fae0acbd4d3e776de8bb",
            "blockNumber": "0x429d3b",
            "from": "0x1b526a8bc633aa3b49dbf4a892dc248ad431abaa",
            "gas": "0x14e84",
            "gasPrice": "0x3b9aca0e",
            "hash": "0x267d37fccfb6968c1f3760f2a36d11d966ac56af85211916266348565d01ef24",
            "input": "0x095ea7b30000000000000000000000004a66f0647c96d7c5be23458d5ea08c0e28344db5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            "nonce": "0x7c",
            "r": "0xc6cbedebfa4de6fdac9ed41c0d184fce016e60c5c7d44bf8169ee96992de34f",
            "s": "0x4e3e10a62da2eca4d41f4eaa3ee61ba41dd89d49a69c51f2a8a096a9f4054cfe",
            "to": "0x6b175474e89094c44da98b954eedeac495271d0f",
            "transactionIndex": "0x0",
            "v": "0x0",
            "value": "0x0"
          }
        ],
        "transactionsRoot": "0xc8e94122a58ec2884ce44e1d2a4c74888b4c05c2bfe5e846702995fc4af0c0a2",
        "uncles": []
      }
    }, null, 2)
  }
];

export default eth_getBlockByHash;