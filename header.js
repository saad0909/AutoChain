import './App.css';
import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import logo from './logo.svg';

function Header() {
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
      const contractAddress = "0xD66C70dce812F57899C79b09D68ddbf67F92Ee39";
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

      useEffect(() => {
        initWeb3();
      }, []);

  return (
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
  );

}

export default Header;
