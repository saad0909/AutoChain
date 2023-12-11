# AutoChain ( Cars Marketplace DApp )
Simple implementation of blockchain based online market place for cars buying, renting, accessories, modification, and inspection services.

Project was made for practicing the basics of solidity and using it to create a dapp.

Welcome to the Cars Marketplace DApp! This decentralized application (DApp) allows users to engage in various activities related to cars, including renting, selling, modification, inspection, and accessories. The project uses Solidity for smart contract development, Hardhat for deployment, and React for the frontend, with integration with the Metamask wallet through Web3.js.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Smart Contract](#smart-contract)
- [Frontend](#frontend)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites
Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Ganache](https://www.trufflesuite.com/ganache) (for local blockchain development)
- [Metamask](https://metamask.io/) browser extension

### Installation and Setup
1. Clone the repository:
   ```bash
   https://github.com/saad0909/AutoChain.git
   ```
2. Install hardhat:
   ```bash
   npm install --save-dev hardhat
   ```
3. Create a hardhat project:
   ```bash
   npx hardhat
   ```
4. Copy the auto.sol file to contract folder
5. Compile the contract:
   ```bash
npx hardhat compile
   ```
6. Run Ganache blockcahin
7. Check from Ganache app the port and address at which blockchain is running
8. goto hardhat.config.js file and check if networks configuration for localhost are mentioned if not then add configurations which you got in previous step from Ganache. It wil be most probably this:
  ```bash
    networks: {
    localhost: {
      url: "HTTP://127.0.0.1:7545",
    },
  },
```
9. Replace the deploy.js file in scripts folder
10. Deploy the contract to blockchain:
    ```bash
    npx hardhat run scripts/deploy.js --network localhost
    ```

