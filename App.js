import './App.css';
import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import logo from './logo.svg';

function App() {
      const contractABI =  [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "purpose",
          "type": "string"
        }
      ],
      "name": "transactions",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "accessories",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "details",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "purpose",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "status",
          "type": "string"
        },
        {
          "internalType": "address payable",
          "name": "owner",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "details",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "purpose",
          "type": "string"
        }
      ],
      "name": "add_service",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "address_ids",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "addresses",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "buy_cars",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "details",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "purpose",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "status",
          "type": "string"
        },
        {
          "internalType": "address payable",
          "name": "owner",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_password",
          "type": "string"
        }
      ],
      "name": "hashData",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "inspection",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "details",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "purpose",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "status",
          "type": "string"
        },
        {
          "internalType": "address payable",
          "name": "owner",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_password",
          "type": "string"
        }
      ],
      "name": "login",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "modification",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "details",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "purpose",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "status",
          "type": "string"
        },
        {
          "internalType": "address payable",
          "name": "owner",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_username",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_password",
          "type": "string"
        }
      ],
      "name": "register",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "rent_cars",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "details",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "purpose",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "status",
          "type": "string"
        },
        {
          "internalType": "address payable",
          "name": "owner",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "reciever",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "transfer_money",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "reciever",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "purpose",
          "type": "string"
        }
      ],
      "name": "transfer_money2",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "purpose",
          "type": "string"
        }
      ],
      "name": "view_services",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        },
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        },
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
      const contractAddress = "0x3a67FCe1BD718406b04aCCe47bf7B316350e002E";
      const [web3, setWeb3] = useState(null);
      const [contract, setContract] = useState(null);

      const initWeb3 = async () => {
        if (window.ethereum) {
          // Modern DApp browsers
          const newWeb3 = new Web3(window.ethereum);
          try {
            // Request account access if needed
            await window.ethereum.enable();
            setWeb3(newWeb3);
            const contract = new newWeb3.eth.Contract(contractABI, contractAddress);
            setContract(contract);
          } catch (error) {
            console.error(error);
          }
        } else if (window.web3) {
          // Legacy DApp browsers
          const newWeb3 = new Web3(window.web3.currentProvider);
          setWeb3(newWeb3);
          const contract = new newWeb3.eth.Contract(contractABI, contractAddress);
          setContract(contract);
        } else {
          console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
        }
      };

      const handleButtonClick = async (name, price, owner, purpose) => {
        console.log("purchasing the product");
        if (web3 && contract) {
          const accounts = await web3.eth.getAccounts();
          const account = accounts[0];
          const eth = 1000000000000000000;
          try {
            const amount = web3.utils.toWei(price, 'ether');
          const trans_res = await contract.methods.transfer_money2(owner, amount, name, price, purpose).send({from:account, value:amount});
          console.log(trans_res);
          console.log('Transaction successful');
          } catch (error) {
            console.error('Error calling createLender:', error);
          }
        }
      }

      const buyingListing = async () =>  {
        if (web3 && contract) {
            const accounts = await web3.eth.getAccounts();
            const account = accounts[0];
            const eth = 1000000000000000000;
            try {
              const re = await contract.methods.view_services("selling").call();
              console.log(re);
              const nameArray = re[0];
              const priceArray = re[2];
              const detailArray = re[1];
              const ownerArray = re[3];

  const table = document.createElement('table');
  table.style.marginTop = '1.5%';
  table.style.marginLeft = '1.5%';
  // Create table header
  const headerRow = table.insertRow(0);
  const nameHeader = headerRow.insertCell(0);
  const detailHeader = headerRow.insertCell(1);
  const priceHeader = headerRow.insertCell(2);
  const ownerHeader = headerRow.insertCell(3);
  const type = headerRow.insertCell(4);

  nameHeader.innerHTML = 'Name';
  detailHeader.innerHTML = 'Details';
  priceHeader.innerHTML = 'Price';
  ownerHeader.innerHTML = 'Owner';
  type.innerHTML = 'Buy cars';

  nameHeader.style.fontWeight = 'bold';
  detailHeader.style.fontWeight = 'bold';
  priceHeader.style.fontWeight = 'bold';
  ownerHeader.style.fontWeight = 'bold';
  type.style.fontWeight = 'bold';

  //insert verticle lines between columns
  nameHeader.style.border = '1px solid black';
  detailHeader.style.border = '1px solid black';
  priceHeader.style.border = '1px solid black';
  ownerHeader.style.border = '1px solid black';
  type.style.border = '1px solid black';

  nameHeader.style.fontWeight = 'bold';
  detailHeader.style.fontWeight = 'bold';
  priceHeader.style.fontWeight = 'bold';
  ownerHeader.style.fontWeight = 'bold';
  type.style.fontWeight = 'bold';

  nameHeader.style.color = 'purple';
  detailHeader.style.color = 'purple';
  priceHeader.style.color = 'purple';
  ownerHeader.style.color = 'purple';
  type.style.color = 'purple';

  nameHeader.style.backgroundColor = 'lightblue';
  detailHeader.style.backgroundColor = 'lightblue';
  priceHeader.style.backgroundColor = 'lightblue';
  ownerHeader.style.backgroundColor = 'lightblue';
  type.style.backgroundColor = 'lightblue';


  // Populate the table with data
  for (let i = 0; i < nameArray.length; i++) {
    const row = table.insertRow(i + 1);
    const nameCell = row.insertCell(0);
    const detailCell = row.insertCell(1);
    const priceCell = row.insertCell(2);
    const ownerCell = row.insertCell(3);
    const buttoncell = row.insertCell(4);

    nameCell.innerHTML = nameArray[i];
    detailCell.innerHTML = detailArray[i];
    priceCell.innerHTML = priceArray[i];
    ownerCell.innerHTML = ownerArray[i];

    nameCell.style.color = 'rgb(200, 200, 200)';
    priceCell.style.color = 'rgb(200, 200, 200)';
    //on hover change color
    buttoncell.innerHTML = "<button id='btn'>Purchase</button>";
    buttoncell.addEventListener('click', function() { handleButtonClick(nameArray[i], priceArray[i], ownerArray[i], "selling"); });
    buttoncell.addEventListener('mouseover', function() {
      nameCell.style.backgroundColor = 'limegreen';
      detailCell.style.backgroundColor = 'limegreen';
      priceCell.style.backgroundColor = 'limegreen';
      ownerCell.style.backgroundColor = 'limegreen';
      ownerCell.style.color = 'purple';
      nameCell.style.color = 'purple';
      detailCell.style.color = 'purple';
      priceCell.style.color = 'purple';
      nameCell.style.transition = '0.25s';
      detailCell.style.transition = '0.25s';
      priceCell.style.transition = '0.25s';
      ownerCell.style.transition = '0.25s';

       });

      buttoncell.addEventListener('mouseout', function() {
        nameCell.style.backgroundColor = 'rgba(234,58,23,0)';
        detailCell.style.backgroundColor = 'rgba(234,58,23,0)';
        priceCell.style.backgroundColor = 'rgba(234,58,23,0)';
        ownerCell.style.backgroundColor = 'rgba(234,58,23,0)';
        ownerCell.style.color = 'black';
        nameCell.style.color = 'rgb(200, 200, 200)';
        detailCell.style.color = 'black';
        priceCell.style.color = 'rgb(200, 200, 200)';
      });
  }

  const conta = document.getElementsByClassName('container')[0];
  try {
  conta.removeChild(conta.childNodes[0]);
  } catch (error) { console.log(error); }
  conta.appendChild(table);
  document.body.appendChild(conta);
              console.log('Transaction successful');
            } catch (error) {
              console.error('Error calling createLender:', error);
            }
          }
      }

      const rentingListing = async () =>  {
        if (web3 && contract) {
          const accounts = await web3.eth.getAccounts();
          const account = accounts[0];
          const eth = 1000000000000000000;
          try {
            const re = await contract.methods.view_services("renting").call();
            console.log(re);
            const nameArray = re[0];
            const priceArray = re[2];
            const detailArray = re[1];
            const ownerArray = re[3];

const table = document.createElement('table');
table.style.marginTop = '1.5%';
table.style.marginLeft = '1.5%';

// Create table header
const headerRow = table.insertRow(0);
const nameHeader = headerRow.insertCell(0);
const detailHeader = headerRow.insertCell(1);
const priceHeader = headerRow.insertCell(2);
const ownerHeader = headerRow.insertCell(3);
const type = headerRow.insertCell(4);

nameHeader.innerHTML = 'Name';
detailHeader.innerHTML = 'Details';
priceHeader.innerHTML = 'Price';
ownerHeader.innerHTML = 'Owner';
type.innerHTML = 'Rent cars';

nameHeader.style.border = '1px solid black';
detailHeader.style.border = '1px solid black';
priceHeader.style.border = '1px solid black';
ownerHeader.style.border = '1px solid black';
type.style.border = '1px solid black';

nameHeader.style.fontWeight = 'bold';
detailHeader.style.fontWeight = 'bold';
priceHeader.style.fontWeight = 'bold';
ownerHeader.style.fontWeight = 'bold';
type.style.fontWeight = 'bold';

nameHeader.style.color = 'purple';
detailHeader.style.color = 'purple';
priceHeader.style.color = 'purple';
ownerHeader.style.color = 'purple';
type.style.color = 'purple';

nameHeader.style.backgroundColor = 'lightblue';
detailHeader.style.backgroundColor = 'lightblue';
priceHeader.style.backgroundColor = 'lightblue';
ownerHeader.style.backgroundColor = 'lightblue';
type.style.backgroundColor = 'lightblue';

// Populate the table with data
for (let i = 0; i < nameArray.length; i++) {
  const row = table.insertRow(i + 1);
  const nameCell = row.insertCell(0);
  const detailCell = row.insertCell(1);
  const priceCell = row.insertCell(2);
  const ownerCell = row.insertCell(3);
  const buttoncell = row.insertCell(4);

  nameCell.innerHTML = nameArray[i];
  detailCell.innerHTML = detailArray[i];
  priceCell.innerHTML = priceArray[i];
  ownerCell.innerHTML = ownerArray[i];
  priceCell.style.color = 'rgb(200, 200, 200)';
  nameCell.style.color = 'rgb(200, 200, 200)';
  
  buttoncell.innerHTML = "<button id='btn'>Purchase</button>";
  buttoncell.addEventListener('click', function() { handleButtonClick(nameArray[i], priceArray[i], ownerArray[i], "renting"); });
  buttoncell.addEventListener('mouseover', function() {
    nameCell.style.backgroundColor = 'limegreen';
    detailCell.style.backgroundColor = 'limegreen';
    priceCell.style.backgroundColor = 'limegreen';
    ownerCell.style.backgroundColor = 'limegreen';
    ownerCell.style.color = 'purple';
    nameCell.style.color = 'purple';
    detailCell.style.color = 'purple';
    priceCell.style.color = 'purple';
    nameCell.style.transition = '0.25s';
    detailCell.style.transition = '0.25s';
    priceCell.style.transition = '0.25s';
    ownerCell.style.transition = '0.25s';
  
     });
  
    buttoncell.addEventListener('mouseout', function() {
      nameCell.style.backgroundColor = 'rgba(234,58,23,0)';
      detailCell.style.backgroundColor = 'rgba(234,58,23,0)';
      priceCell.style.backgroundColor = 'rgba(234,58,23,0)';
      ownerCell.style.backgroundColor = 'rgba(234,58,23,0)';
      ownerCell.style.color = 'black';
      nameCell.style.color = 'rgb(200, 200, 200)';
      detailCell.style.color = 'black';
      priceCell.style.color = 'rgb(200, 200, 200)';
    });
  }

const conta = document.getElementsByClassName('container')[0];
try {
conta.removeChild(conta.childNodes[0]);
} catch (error) { console.log(error); }
conta.appendChild(table);
document.body.appendChild(conta);
            console.log('Transaction successful');
          } catch (error) {
            console.error('Error calling createLender:', error);
          }
        }
      }
      
      const modificationListing = async () =>  {
        if (web3 && contract) {
          const accounts = await web3.eth.getAccounts();
          const account = accounts[0];
          const eth = 1000000000000000000;
          try {
            const re = await contract.methods.view_services("modification").call();
            console.log(re);
            const nameArray = re[0];
            const priceArray = re[2];
            const detailArray = re[1];
            const ownerArray = re[3];

const table = document.createElement('table');
table.style.marginTop = '1.5%';
table.style.marginLeft = '1.5%';
// Create table header
const headerRow = table.insertRow(0);
const nameHeader = headerRow.insertCell(0);
const detailHeader = headerRow.insertCell(1);
const priceHeader = headerRow.insertCell(2);
const ownerHeader = headerRow.insertCell(3);
const type = headerRow.insertCell(4);

nameHeader.innerHTML = 'Name';
detailHeader.innerHTML = 'Details';
priceHeader.innerHTML = 'Price';
ownerHeader.innerHTML = 'Owner';
type.innerHTML = 'Modifcation order';

nameHeader.style.border = '1px solid black';
detailHeader.style.border = '1px solid black';
priceHeader.style.border = '1px solid black';
ownerHeader.style.border = '1px solid black';
type.style.border = '1px solid black';

nameHeader.style.fontWeight = 'bold';
detailHeader.style.fontWeight = 'bold';
priceHeader.style.fontWeight = 'bold';
ownerHeader.style.fontWeight = 'bold';
type.style.fontWeight = 'bold';

nameHeader.style.color = 'purple';
detailHeader.style.color = 'purple';
priceHeader.style.color = 'purple';
ownerHeader.style.color = 'purple';
type.style.color = 'purple';

nameHeader.style.backgroundColor = 'lightblue';
detailHeader.style.backgroundColor = 'lightblue';
priceHeader.style.backgroundColor = 'lightblue';
ownerHeader.style.backgroundColor = 'lightblue';
type.style.backgroundColor = 'lightblue';

// Populate the table with data
for (let i = 0; i < nameArray.length; i++) {
  const row = table.insertRow(i + 1);
  const nameCell = row.insertCell(0);
  const detailCell = row.insertCell(1);
  const priceCell = row.insertCell(2);
  const ownerCell = row.insertCell(3);
  const buttoncell = row.insertCell(4);

  nameCell.innerHTML = nameArray[i];
  detailCell.innerHTML = detailArray[i];
  priceCell.innerHTML = priceArray[i];
  ownerCell.innerHTML = ownerArray[i];
  priceCell.style.color = 'rgb(200, 200, 200)';
  nameCell.style.color = 'rgb(200, 200, 200)';
  
  buttoncell.innerHTML = "<button id='btn'>Purchase</button>";
  buttoncell.addEventListener('click', function() { handleButtonClick(nameArray[i], priceArray[i], ownerArray[i], "modification"); });
  buttoncell.addEventListener('mouseover', function() {
    nameCell.style.backgroundColor = 'limegreen';
    detailCell.style.backgroundColor = 'limegreen';
    priceCell.style.backgroundColor = 'limegreen';
    ownerCell.style.backgroundColor = 'limegreen';
    ownerCell.style.color = 'purple';
    nameCell.style.color = 'purple';
    detailCell.style.color = 'purple';
    priceCell.style.color = 'purple';
    nameCell.style.transition = '0.25s';
    detailCell.style.transition = '0.25s';
    priceCell.style.transition = '0.25s';
    ownerCell.style.transition = '0.25s';
  
     });
  
    buttoncell.addEventListener('mouseout', function() {
      nameCell.style.backgroundColor = 'rgba(234,58,23,0)';
      detailCell.style.backgroundColor = 'rgba(234,58,23,0)';
      priceCell.style.backgroundColor = 'rgba(234,58,23,0)';
      ownerCell.style.backgroundColor = 'rgba(234,58,23,0)';
      ownerCell.style.color = 'black';
      nameCell.style.color = 'rgb(200, 200, 200)';
      detailCell.style.color = 'black';
      priceCell.style.color = 'rgb(200, 200, 200)';
    });
  }

const conta = document.getElementsByClassName('container')[0];
try {
conta.removeChild(conta.childNodes[0]);
} catch (error) { console.log(error); }
conta.appendChild(table);
document.body.appendChild(conta);
            console.log('Transaction successful');
          } catch (error) {
            console.error('Error calling createLender:', error);
          }
        }
      }

      const accessoriesListing = async () =>  {
        if (web3 && contract) {
          const accounts = await web3.eth.getAccounts();
          const account = accounts[0];
          const eth = 1000000000000000000;
          try {
            const re = await contract.methods.view_services("accessories").call();
            console.log(re);
            const nameArray = re[0];
            const priceArray = re[2];
            const detailArray = re[1];
            const ownerArray = re[3];

const table = document.createElement('table');
table.style.marginTop = '1.5%';
table.style.marginLeft = '1.5%';
// Create table header
const headerRow = table.insertRow(0);
const nameHeader = headerRow.insertCell(0);
const detailHeader = headerRow.insertCell(1);
const priceHeader = headerRow.insertCell(2);
const ownerHeader = headerRow.insertCell(3);
const type = headerRow.insertCell(4);

nameHeader.innerHTML = 'Name';
detailHeader.innerHTML = 'Details';
priceHeader.innerHTML = 'Price';
ownerHeader.innerHTML = 'Owner';
type.innerHTML = 'Buy accessories';

nameHeader.style.border = '1px solid black';
detailHeader.style.border = '1px solid black';
priceHeader.style.border = '1px solid black';
ownerHeader.style.border = '1px solid black';
type.style.border = '1px solid black';

nameHeader.style.fontWeight = 'bold';
detailHeader.style.fontWeight = 'bold';
priceHeader.style.fontWeight = 'bold';
ownerHeader.style.fontWeight = 'bold';
type.style.fontWeight = 'bold';

nameHeader.style.color = 'purple';
detailHeader.style.color = 'purple';
priceHeader.style.color = 'purple';
ownerHeader.style.color = 'purple';
type.style.color = 'purple';

nameHeader.style.backgroundColor = 'lightblue';
detailHeader.style.backgroundColor = 'lightblue';
priceHeader.style.backgroundColor = 'lightblue';
ownerHeader.style.backgroundColor = 'lightblue';
type.style.backgroundColor = 'lightblue';

// Populate the table with data
for (let i = 0; i < nameArray.length; i++) {
  const row = table.insertRow(i + 1);
  const nameCell = row.insertCell(0);
  const detailCell = row.insertCell(1);
  const priceCell = row.insertCell(2);
  const ownerCell = row.insertCell(3);
  const buttoncell = row.insertCell(4);

  nameCell.innerHTML = nameArray[i];
  detailCell.innerHTML = detailArray[i];
  priceCell.innerHTML = priceArray[i];
  ownerCell.innerHTML = ownerArray[i];

  priceCell.style.color = 'rgb(200, 200, 200)';
  nameCell.style.color = 'rgb(200, 200, 200)';
  
  buttoncell.innerHTML = "<button id='btn'>Purchase</button>";
  buttoncell.addEventListener('click', function() { handleButtonClick(nameArray[i], priceArray[i], ownerArray[i], "accessories"); });
  buttoncell.addEventListener('mouseover', function() {
    nameCell.style.backgroundColor = 'limegreen';
    detailCell.style.backgroundColor = 'limegreen';
    priceCell.style.backgroundColor = 'limegreen';
    ownerCell.style.backgroundColor = 'limegreen';
    ownerCell.style.color = 'purple';
    nameCell.style.color = 'purple';
    detailCell.style.color = 'purple';
    priceCell.style.color = 'purple';
    nameCell.style.transition = '0.25s';
    detailCell.style.transition = '0.25s';
    priceCell.style.transition = '0.25s';
    ownerCell.style.transition = '0.25s';
  
     });
  
    buttoncell.addEventListener('mouseout', function() {
      nameCell.style.backgroundColor = 'rgba(234,58,23,0)';
      detailCell.style.backgroundColor = 'rgba(234,58,23,0)';
      priceCell.style.backgroundColor = 'rgba(234,58,23,0)';
      ownerCell.style.backgroundColor = 'rgba(234,58,23,0)';
      ownerCell.style.color = 'black';
      nameCell.style.color = 'rgb(200, 200, 200)';
      detailCell.style.color = 'black';
      priceCell.style.color = 'rgb(200, 200, 200)';
    });
  }

const conta = document.getElementsByClassName('container')[0];
try {
conta.removeChild(conta.childNodes[0]);
} catch (error) { console.log(error); }
conta.appendChild(table);
document.body.appendChild(conta);
            console.log('Transaction successful');
          } catch (error) {
            console.error('Error calling createLender:', error);
          }
        }
      }

    const inspectionListing = async () =>  {
      if (web3 && contract) {
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        const eth = 1000000000000000000;
        try {
          const re = await contract.methods.view_services("inspection").call();
          console.log(re);
          const nameArray = re[0];
          const priceArray = re[2];
          const detailArray = re[1];
          const ownerArray = re[3];

const table = document.createElement('table');
table.style.marginTop = '1.5%';
table.style.marginLeft = '1.5%';

// Create table header
const headerRow = table.insertRow(0);
const nameHeader = headerRow.insertCell(0);
const detailHeader = headerRow.insertCell(1);
const priceHeader = headerRow.insertCell(2);
const ownerHeader = headerRow.insertCell(3);
const type = headerRow.insertCell(4);

nameHeader.innerHTML = 'Name';
detailHeader.innerHTML = 'Details';
priceHeader.innerHTML = 'Price';
ownerHeader.innerHTML = 'Owner';
type.innerHTML = 'Buy cars';

nameHeader.style.border = '1px solid black';
detailHeader.style.border = '1px solid black';
priceHeader.style.border = '1px solid black';
ownerHeader.style.border = '1px solid black';
type.style.border = '1px solid black';

nameHeader.style.fontWeight = 'bold';
detailHeader.style.fontWeight = 'bold';
priceHeader.style.fontWeight = 'bold';
ownerHeader.style.fontWeight = 'bold';
type.style.fontWeight = 'bold';

nameHeader.style.color = 'purple';
detailHeader.style.color = 'purple';
priceHeader.style.color = 'purple';
ownerHeader.style.color = 'purple';
type.style.color = 'purple';

nameHeader.style.backgroundColor = 'lightblue';
detailHeader.style.backgroundColor = 'lightblue';
priceHeader.style.backgroundColor = 'lightblue';
ownerHeader.style.backgroundColor = 'lightblue';
type.style.backgroundColor = 'lightblue';

// Populate the table with data
for (let i = 0; i < nameArray.length; i++) {
const row = table.insertRow(i + 1);
const nameCell = row.insertCell(0);
const detailCell = row.insertCell(1);
const priceCell = row.insertCell(2);
const ownerCell = row.insertCell(3);
const buttoncell = row.insertCell(4);

nameCell.innerHTML = nameArray[i];
detailCell.innerHTML = detailArray[i];
priceCell.innerHTML = priceArray[i];
ownerCell.innerHTML = ownerArray[i];

priceCell.style.color = 'rgb(200, 200, 200)';
nameCell.style.color = 'rgb(200, 200, 200)';

buttoncell.innerHTML = "<button id='btn'>Purchase</button>";
buttoncell.addEventListener('click', function() { handleButtonClick(nameArray[i], priceArray[i], ownerArray[i], "inspection"); });
buttoncell.addEventListener('mouseover', function() {
  nameCell.style.backgroundColor = 'limegreen';
  detailCell.style.backgroundColor = 'limegreen';
  priceCell.style.backgroundColor = 'limegreen';
  ownerCell.style.backgroundColor = 'limegreen';
  ownerCell.style.color = 'purple';
  nameCell.style.color = 'purple';
  detailCell.style.color = 'purple';
  priceCell.style.color = 'purple';
  nameCell.style.transition = '0.25s';
  detailCell.style.transition = '0.25s';
  priceCell.style.transition = '0.25s';
  ownerCell.style.transition = '0.25s';

   });

  buttoncell.addEventListener('mouseout', function() {
    nameCell.style.backgroundColor = 'rgba(234,58,23,0)';
    detailCell.style.backgroundColor = 'rgba(234,58,23,0)';
    priceCell.style.backgroundColor = 'rgba(234,58,23,0)';
    ownerCell.style.backgroundColor = 'rgba(234,58,23,0)';
    ownerCell.style.color = 'black';
    nameCell.style.color = 'rgb(200, 200, 200)';
    detailCell.style.color = 'black';
    priceCell.style.color = 'rgb(200, 200, 200)';
  });
}

const conta = document.getElementsByClassName('container')[0];
try {
conta.removeChild(conta.childNodes[0]);
} catch (error) { console.log(error); }
conta.appendChild(table);
document.body.appendChild(conta);
          console.log('Transaction successful');
        } catch (error) {
          console.error('Error calling createLender:', error);
        }
      }
      }    
////////////////////////////////////////////////////
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const [name, setname] = useState('');
const [price, setprice] = useState('');
const [detail, setdetails] = useState('');
const [purpose, setpurpose] = useState('');

const Register = async () => {
  if (web3 && contract) {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    try {
       const res = await contract.methods.register(username, password).send({from:account});
       console.log('Result from functionn:', res);
    console.log('Regsitered succesfuuly successful');
    } catch (error) {
      console.error('Error registering:', error);
    }
  }
  }
  
  const Login = async () => {
    if (web3 && contract) {
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      try {
         const res = await contract.methods.login(password).call();
         console.log('Result from functionn:', res);
      console.log('Regsitered succesfuuly successful');
      } catch (error) {
        console.error('Error registering:', error);
      }
    }
    }
      const Add_service = async () => {
        if (web3 && contract) {
          const accounts = await web3.eth.getAccounts();
          const account = accounts[0];
          try {
             const res = await contract.methods.add_service(name, price, detail, purpose).send({from:account});
             console.log('Result from functionn:', res);
          console.log('Regsitered succesfuuly successful');
          } catch (error) {
            console.error('Error registering:', error);
          }
        }
      }
  
      const listenToEvents = () => {
        const eth = 1000000000000000000;
  
        //count number of events
        var event_count = 0;
        var eventss;
        contract.getPastEvents('transactions', {
          fromBlock: 0,
          toBlock: 'latest',
        }, function(error, events){ console.log(events); })
        .then(function(events){
          console.log(events.length);
          event_count = events.length;
          eventss = events;
        });
        var t  = document.getElementById("tble");
        t.style.marginTop = '1.5%';
        t.style.marginLeft = '1.5%';
        t.style.display = "table";
        try {
          t.innerHTML = "";
        } catch (error) {
        }
        var row0 = t.insertRow(0);
        var cell0 = row0.insertCell(0);
        var cell1 = row0.insertCell(1);
        var cell2 = row0.insertCell(2);
        var cell3 = row0.insertCell(3);
        var cell4 = row0.insertCell(4);
        var cell5 = row0.insertCell(5);
  
        cell0.innerHTML = "From";
        cell1.innerHTML = "To";
        cell2.innerHTML = "Amount";
        cell3.innerHTML = "Name";
        cell4.innerHTML = "Price";
        cell5.innerHTML = "Purpose";
  
        cell0.style.border = "1px solid black";
        cell1.style.border = "1px solid black";
        cell2.style.border = "1px solid black";
        cell3.style.border = "1px solid black";
        cell4.style.border = "1px solid black";
        cell5.style.border = "1px solid black";
        cell0.style.fontWeight = "bold";
        cell1.style.fontWeight = "bold";
        cell2.style.fontWeight = "bold";
        cell3.style.fontWeight = "bold";
        cell4.style.fontWeight = "bold";
        cell5.style.fontWeight = "bold";
        
        cell0.style.color = "purple";
        cell1.style.color = "purple";
        cell2.style.color = "purple";
        cell3.style.color = "purple";
        cell4.style.color = "purple";
        cell5.style.color = "purple";
  
        cell0.style.backgroundColor = "yellow";
        cell1.style.backgroundColor = "yellow";
        cell2.style.backgroundColor = "yellow";
        cell3.style.backgroundColor = "yellow";
        cell4.style.backgroundColor = "yellow";
        cell5.style.backgroundColor = "yellow";
  
        //console.log("sdf: ", event_count);
        contract.getPastEvents('transactions', {
          fromBlock: 0,
          toBlock: 'latest',
        }, function(error, events){ console.log(events); })
        .then(function(events){
          console.log(events.length);
          for(var i = 1; i <= events.length; i++){
            var row = t.insertRow(i);
            var cell0 = row.insertCell(0);
            var cell1 = row.insertCell(1);
            var cell2 = row.insertCell(2);
            var cell3 = row.insertCell(3);
            var cell4 = row.insertCell(4);
            var cell5 = row.insertCell(5);
            cell0.innerHTML = events[i-1].returnValues._from;
            cell1.innerHTML = events[i-1].returnValues._to;
            cell2.innerHTML =  web3.utils.fromWei(events[i-1].returnValues._amount, "ether") + " ETH";
            cell3.innerHTML = events[i-1].returnValues.name;
            cell4.innerHTML = events[i-1].returnValues.price;
            cell5.innerHTML = events[i-1].returnValues.purpose;
            cell0.style.color = "rgb(200,200,200)";
            cell2.style.color = "rgb(200,200,200)";
            cell4.style.color = "rgb(200,200,200)";
          }
        });
  
       // document.body.appendChild(t);
          //display all events on the html page
          contract.events.transactions({
            fromBlock: 0,
            toBlock: 'latest',
          })
          .on('data', (event) => {
            console.log("event: ", event);
          })
      }

      // useEffect(() => {
      //   initWeb3();
      // }, []);

  return (
    <div>
<div className="header">
  <div className="grid-item">
  <img src={logo} className="logo" />
  </div>
  <div className="grid-item"><p className="htext1" ><b><i>AutoChain</i></b></p></div>
  <div className="grid-item"><p className="htext"  onClick={buyingListing}>Buying</p></div>
  <div className="grid-item"><p className="htext" onClick={rentingListing}>Renting</p></div>
  <div className="grid-item"><p className="htext"  onClick={accessoriesListing}>Accessories</p></div>
  <div className="grid-item"><p className="htext"  onClick={inspectionListing}>Inspection</p></div>
  <div className="grid-item"><p className="htext"  onClick={modificationListing}>Modification</p></div>
 </div>
 <button className="metam" onClick={initWeb3}>Connect Metamask</button>
 <div className="cred-bar">
      <input
        className="usr"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="pass"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="inp" onClick={Login}>Log in</button>
      <button className="sup" onClick={Register}>
        Sign up
      </button>
    </div>
    <div className="add-service">
      <input placeholder='Name'
      type="text"
      value={name}
      onChange={(e) => setname(e.target.value)}
      />
      <input placeholder='Price'
      type="text"
      value={price}
      onChange={(e) => setprice(e.target.value)}
      />
      <input placeholder='Details'
      type="text"
      value={detail}
      onChange={(e) => setdetails(e.target.value)}
      />
      <input placeholder='Purpose'
      type="text"
      value={purpose}
      onChange={(e) => setpurpose(e.target.value)}
      /> 
      <button className='ads' onClick={Add_service}>Add Service</button> 
      </div>
      <button className="list-events" onClick={listenToEvents}>List Events</button>
      <table id="tble"></table>
      <div className="container"></div>
 </div>
  );

}

export default App;
