# Syncify

[![GitHub repo](https://img.shields.io/badge/GitHub-api--docs-blue?style=flat&logo=github)](https://github.com/unknown91tech/api-docs)

This project provides an interactive documentation and testing interface for exploring blockchain RPC APIs with unlimited access across multiple networks. Built on a custom RPC provider architecture, this solution eliminates traditional API key requirements and usage limitations.

## About The Project

This API documentation explorer provides a frontend for interacting with a custom-built local RPC URL provider that offers:

- **Unlimited API Calls**: No daily or monthly call limits
- **No API Keys Required**: Direct access without registration
- **Multi-Network Support**: Access to multiple blockchain networks
- **Interactive Testing**: Live testing interface for all supported endpoints

The system architecture includes:
- A rate-limited backend server accepting JSON requests
- Redis-based request queuing
- Network-specific workers processing requests from the queue
- Comprehensive response handling

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm or yarn
- Redis server (for the backend)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/unknown91tech/api-docs.git
cd api-docs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The documentation interface will be available at [http://localhost:3000](http://localhost:3000).

## Supported Networks

The documentation explorer and backend currently support:

- Ethereum (Mainnet, Sepolia, Holesky)
- More networks coming soon...

## Supported RPC Methods

The system supports standard JSON-RPC methods for Ethereum, including:

- `eth_getBlockByNumber`: Retrieve block data by block number
- `eth_blockNumber`: Get the latest block number
- And many more blockchain-specific methods that will be added soon.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Project Link: [https://github.com/unknown91tech/api-docs](https://github.com/unknown91tech/api-docs)
