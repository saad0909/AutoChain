import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

function Loggin_signup() {
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
  useEffect(() => {
    initWeb3();
  }, []);

  return (
    <div>
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
    </div>
  );
};

export default Loggin_signup;
