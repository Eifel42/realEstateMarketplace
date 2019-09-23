# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# How to mint a new token without verification (Only for testing)
Run the following in the truffle console
`for(let i=1;i<=10;i++){SolnSquareVerifier.deployed().then(e=>e.mint("..",i,{from:"..."})).then(e=>{console.log(e)}).catch(e=>{console.log(e)});}`

# Truffle Test
- Run `truffle test` to test the code.

# Rinkeby Contract Address
First the `Verifier` contract is deployed then the `SolnSquareVerifier` contract using the `Verifier` address.
- Verifier - https://rinkeby.etherscan.io/address/
- SolnSquareVerifier - https://rinkeby.etherscan.io/address/

# Contract ABI
All contract API are in the build folder

# OpenSea MarketPlace Storefront
TODO

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)