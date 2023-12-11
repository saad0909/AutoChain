const hre = require("hardhat");

async function main() {
  const lock = await hre.ethers.deployContract("MyAutoChain");
  await lock.waitForDeployment();
  console.log(`deployed to ${lock.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
