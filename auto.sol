// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract MyAutoChain {
    struct services {
        string name;
        uint price;
        string details;
        string purpose; //selling or renting or accessories or modification or inspection
        string status; //available or sold or rented
        address payable owner;
    }
    struct user {
        string username;
        bytes32 password_hash;
        string state; //logged in or logged out
    }
    address[] public addresses;
    uint service_id = 0;
    mapping(address => user) private users;
    mapping(uint => services[]) public buy_cars;
    mapping(uint => services[]) public rent_cars;
    mapping(uint => services[]) public accessories;
    mapping(uint => services[]) public modification;
    mapping(uint => services[]) public inspection;
    mapping(address => uint) public address_ids;
    event transactions(address indexed _from, address indexed _to, uint256 _amount, string name, uint price, string purpose);
    uint register_count;
    uint bcars;
    uint rcars;
    uint acces;
    uint mod;
    uint insp;

    constructor() {
        register_count = 0;
        bcars = 0;
        rcars = 0;
        acces = 0;
        mod = 0;
        insp = 0;
    }

    function login(string memory _password) public view returns(bool) {
        bytes32 password_hash = hashData(_password);
        if (users[msg.sender].password_hash == password_hash) {
            return true;
        }
        return false;
    }

    function register(string memory _username, string memory _password) public username_length(_username) is_unique(_username) minimum_length(_password) is_not_registered() returns(bool){
        addresses.push(msg.sender);     
        address_ids[msg.sender] = register_count;  
        register_count++;
        bytes32 password_hash = hashData(_password);
        users[msg.sender] = user({
            username: _username,
            password_hash: password_hash,
            state: "logged in"
        });
        return true;
    }

    function hashData(string memory _password) public pure returns(bytes32) {
        return keccak256(abi.encodePacked(_password));
    }

    function add_service(string memory name, uint price, string memory details, string memory purpose) public is_logged_in() {
        if (keccak256(bytes(purpose)) == keccak256(bytes("selling"))) {
            buy_cars[address_ids[msg.sender]].push(services({
                name: name,
                price: price,
                details: details,
                purpose: purpose,
                status: "available",
                owner: payable(msg.sender)
            }));
            bcars++;
        }
        else if (keccak256(bytes(purpose)) == keccak256(bytes("renting"))) {
            rent_cars[address_ids[msg.sender]].push(services({
                name: name,
                price: price,
                details: details,
                purpose: purpose,
                status: "available",
                owner: payable(msg.sender)
            }));
            rcars++;
        }
        else if (keccak256(bytes(purpose)) == keccak256(bytes("accessories"))) {
            accessories[address_ids[msg.sender]].push(services({
                name: name,
                price: price,
                details: details,
                purpose: purpose,
                status: "available",
                owner: payable(msg.sender)
            }));
            acces++;
        }
        else if (keccak256(bytes(purpose)) == keccak256(bytes("modification"))) {
            modification[address_ids[msg.sender]].push(services({
                name: name,
                price: price,
                details: details,
                purpose: purpose,
                status: "available",
                owner: payable(msg.sender)
            }));
            mod++;
        }
        else if (keccak256(bytes(purpose)) == keccak256(bytes("inspection"))) {
            inspection[address_ids[msg.sender]].push(services({
                name: name,
                price: price,
                details: details,
                purpose: purpose,
                status: "available",
                owner: payable(msg.sender)
            }));
            insp++;
        }
    }


    function view_services(string memory purpose) public view returns(string[] memory, string[] memory, uint[] memory, address[] memory) {
        if (keccak256(bytes(purpose)) == keccak256(bytes("selling"))) {
            string[] memory names = new string[](bcars);
            string[] memory details = new string[](bcars);
            uint[] memory prices = new uint[](bcars);
            address[] memory owners = new address[](bcars);
            uint index = 0;
            for (uint i = 0; i < addresses.length; i++) {
                for(uint j = 0; j < buy_cars[address_ids[addresses[i]]].length; j++) {
                    if (keccak256(bytes(buy_cars[address_ids[addresses[i]]][j].status)) == keccak256(bytes("available"))) {
                        names[index] = buy_cars[address_ids[addresses[i]]][j].name;
                        details[index] = buy_cars[address_ids[addresses[i]]][j].details;
                        prices[index] = buy_cars[address_ids[addresses[i]]][j].price;
                        owners[index] = buy_cars[address_ids[addresses[i]]][j].owner;
                        index++;
                    }
                }
            }
            return (names, details, prices, owners);
        }
        else if (keccak256(bytes(purpose)) == keccak256(bytes("renting"))) {
            string[] memory names = new string[](rcars);
            string[] memory details = new string[](rcars);
            uint[] memory prices = new uint[](rcars);
            address[] memory owners = new address[](rcars);
            uint index = 0;
            for (uint i = 0; i < addresses.length; i++) {
                for(uint j = 0; j < rent_cars[address_ids[addresses[i]]].length; j++) {
                    if (keccak256(bytes(rent_cars[address_ids[addresses[i]]][j].status)) == keccak256(bytes("available"))) {
                        names[index] = rent_cars[address_ids[addresses[i]]][j].name;
                        details[index] = rent_cars[address_ids[addresses[i]]][j].details;
                        prices[index] = rent_cars[address_ids[addresses[i]]][j].price;
                        owners[index] = rent_cars[address_ids[addresses[i]]][j].owner;
                        index++;
                    }
                }
            }
            return (names, details, prices, owners);
        }
        else if (keccak256(bytes(purpose)) == keccak256(bytes("accessories"))) {
            string[] memory names = new string[](acces);
            string[] memory details = new string[](acces);
            uint[] memory prices = new uint[](acces);
            address[] memory owners = new address[](acces);
            uint index = 0;
            for (uint i = 0; i < addresses.length; i++) {
                for(uint j = 0; j < accessories[address_ids[addresses[i]]].length; j++) {
                    if (keccak256(bytes(accessories[address_ids[addresses[i]]][j].status)) == keccak256(bytes("available"))) {
                        names[index] = accessories[address_ids[addresses[i]]][j].name;
                        details[index] = accessories[address_ids[addresses[i]]][j].details;
                        prices[index] = accessories[address_ids[addresses[i]]][j].price;
                        owners[index] = accessories[address_ids[addresses[i]]][j].owner;
                        index++;
                    }
                }
            }
            return (names, details, prices, owners);
        }
        else if (keccak256(bytes(purpose)) == keccak256(bytes("modification"))) {
            string[] memory names = new string[](mod);
            string[] memory details = new string[](mod);
            uint[] memory prices = new uint[](mod);
            address[] memory owners = new address[](mod);
            uint index = 0;
            for (uint i = 0; i < addresses.length; i++) {
                for(uint j = 0; j < modification[address_ids[addresses[i]]].length; j++) {
                    if (keccak256(bytes(modification[address_ids[addresses[i]]][j].status)) == keccak256(bytes("available"))) {
                        names[index] = modification[address_ids[addresses[i]]][j].name;
                        details[index] = modification[address_ids[addresses[i]]][j].details;
                        prices[index] = modification[address_ids[addresses[i]]][j].price;
                        owners[index] = modification[address_ids[addresses[i]]][j].owner;
                        index++;
                    }
                }
            }
            return (names, details, prices, owners);
        }
        
        else{
            string[] memory names = new string[](insp);
            string[] memory details = new string[](insp);
            uint[] memory prices = new uint[](insp);
            address[] memory owners = new address[](insp);
            uint index = 0;
            for (uint i = 0; i < addresses.length; i++) {
                for(uint j = 0; j < inspection[address_ids[addresses[i]]].length; j++) {
                    if (keccak256(bytes(inspection[address_ids[addresses[i]]][j].status)) == keccak256(bytes("available"))) {
                        names[index] = inspection[address_ids[addresses[i]]][j].name;
                        details[index] = inspection[address_ids[addresses[i]]][j].details;
                        prices[index] = inspection[address_ids[addresses[i]]][j].price;
                        owners[index] = inspection[address_ids[addresses[i]]][j].owner;
                        index++;
                    }
                }
            }
            return (names, details, prices, owners);
        }
    }

    function transfer_money2(address payable reciever, uint256 _amount, string memory name, uint price, string memory purpose) external payable is_logged_in() {
        reciever.transfer(_amount);
        emit transactions(msg.sender, reciever, _amount, name, price, purpose);
    }

    function transfer_money(address payable reciever, uint256 _amount) external payable {
        reciever.transfer(_amount);
    }

    modifier minimum_length(string memory _password) {
        require(bytes(_password).length >= 8, "Password must be at least 8 characters long");
        _;
    }

    modifier is_unique(string memory _username) {
        for (uint i = 0; i < addresses.length; i++) {
            require(keccak256(bytes(users[addresses[i]].username)) != keccak256(bytes(_username)), "Username already taken");
        }
        _;
    }

    modifier is_not_registered() {
        require(bytes(users[msg.sender].username).length < 4, "User already registered");
        _;
    }

    modifier username_length(string memory _username) {
        require(bytes(_username).length >= 4, "Username must be at least 4 characters long");
        _;
    } 

    modifier is_logged_in() {
        require(keccak256(bytes(users[msg.sender].state)) == keccak256(bytes("logged in")), "User must be logged in");
        _;
    }
}

//0x88A7A9A6fA98DF1F8e60037aA8027743403fD8F9
