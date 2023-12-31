# AutoChain ( Cars Marketplace DApp )
Simple implementation of blockchain based online market place for cars buying, renting, accessories, modification, and inspection services.

Project was made for practicing the basics of solidity and using it to create a dapp.

Welcome to the Cars Marketplace DApp! This decentralized application (DApp) allows users to engage in various activities related to cars, including renting, selling, modification, inspection, and accessories. The project uses Solidity for smart contract development, Hardhat for deployment, and React for the frontend, with integration with the Metamask wallet through Web3.js.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation and Setup](#installation-and-Setup)
- [Smart Contract](#smart-contract)
- [Frontend](#frontend)
- [Usage](#usage)

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
## Smart Contract
4. Copy the auto.sol file to contract folder
5. Compile the contract:
   ```bash
   npx hardhat compile
   ```
6. Run Ganache blockcahin
7. Check from Ganache app the port and address at which blockchain is running
8. goto hardhat.config.js file and check if networks configuration for localhost are mentioned if not then add configurations which you got in previous step from
Ganache. It wil be most probably this:
      ```bash
          networks: {
          localhost: {
          url: "HTTP://127.0.0.1:7545",
          },
          },
      ```
      ![image](https://github.com/saad0909/AutoChain/assets/33553848/a22f48e6-ad26-41a8-836c-007f6bcb31b4)

10. Replace the deploy.js file in scripts folder
11. Deploy the contract to blockchain:
    ```bash
    npx hardhat run scripts/deploy.js --network localhost
    ```
## Frontend
12. Create a react app:
    ```bash
    npx create-react-app myapp
    ```
13. add images folder and the App.js, index.js, logo.html, and css files in src folder
14. Copy the address contract address returned on deploying the contract to contractAddress variable in header.js and credential.js files
15. Start the react app:
    ```bash
    npm start
    ```
    ![image](https://github.com/saad0909/AutoChain/assets/33553848/1ac32cfc-5af7-4ec8-9d1f-e0723a02c02d)

## Usage
For new wallets interacting with the dapp need to register with unique username of atleast 4 characters and password of atleast 8 characters first to interact with the website
For viewing transactions history click on List Events button
![image](https://github.com/saad0909/AutoChain/assets/33553848/6d697820-4a16-4740-a0fd-c01ac4a22486)

For viewing different services like buying and renting click on their buttons
![image](https://github.com/saad0909/AutoChain/assets/33553848/8bca30a0-01f1-489a-acfb-1c58173e9ffc)

For adding new service the purpose input field can have only 4 types of values("selling", "renting", "accessories", "modification", "selling")


