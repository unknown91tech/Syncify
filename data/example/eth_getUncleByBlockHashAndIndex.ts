import { ApiExampleData } from '../types';

/**
 * Ethereum eth_getUncleByBlockHashAndIndex API examples
 */
const eth_getUncleByBlockHashAndIndex: ApiExampleData[] = [
  {
    method: "POST",
    endpoint: "https://face-server-wine.vercel.app/api/v1/ethereum/eth_getUncleByBlockHashAndIndex",
    description: "Returns information about an uncle of a block by hash and uncle index position.",
    requestBody: JSON.stringify({
      "chain": "Ethereum",
      "jsonrpc": "2.0",
      "id": 1,
      "method": "eth_getUncleByBlockHashAndIndex",
      "params": [
        "0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35",
        "0x0"
      ],
      "network": "Mainnet"
    }, null, 2),
    response: JSON.stringify({
      "jsonrpc": "2.0",
      "id": 1,
      "result": {
        "baseFeePerGas": "0x7",
        "difficulty": "0x77b7c80a23d",
        "extraData": "0x68747470733a2f2f7777772e62697462657474696e672e63632f",
        "gasLimit": "0x7a121d",
        "gasUsed": "0xf829",
        "hash": "0x824cce7c7c2ec6874b9fa9a9a898eb5f27cbaf3991dfa81084c3af60d1db618c",
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "miner": "0xea674fdde714fd979de3edf0f56aa9716b898ec8",
        "mixHash": "0x0b15fe0a9aa789c167b0f5ade7b72969d9f2193014cb4e98382254f60ffb2f4a",
        "nonce": "0xa212d6400b89b437",
        "number": "0x5bad54",
        "parentHash": "0x05e19fb68d9ec98f6f274d5ca5943baa713f73955735cb9a8fd462a4d2735035",
        "receiptsRoot": "0x90807b32c4aa4610c57289de57fa68ba50ed53f14dd2c25f1862aa049029dcd6",
        "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        "size": "0x25a",
        "stateRoot": "0xebc7a1603bfffe0a14bdb89f898e2f2824abb40de8f70e633a02117d4f127a50",
        "timestamp": "0x5b54143f",
        "totalDifficulty": null,
        "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
        "uncles": []
      }
    }, null, 2)
  }
];

export default eth_getUncleByBlockHashAndIndex;