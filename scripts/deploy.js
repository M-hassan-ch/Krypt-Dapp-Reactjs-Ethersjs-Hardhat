// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const Transaction = await hre.ethers.getContractFactory('Transactions');
  console.log('Deploying Transaction...');

  // 2. Instantiating a new Transaction smart contract
  const contract = await Transaction.deploy();

  // 3. Waiting for the deployment to resolve
  await contract.deployed();

  // 4. Use the contract instance to get the contract address
  console.log('Transaction deployed to:', contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
   .then(() => process.exit(0))
   .catch((error) => {
      console.error(error);
      process.exit(1);
   });