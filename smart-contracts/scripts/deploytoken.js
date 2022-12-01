const hre = require("hardhat");

async function main() {
  const Token = await hre.ethers.getContractFactory("Coin");
  const tokencontract = await Token.deploy();
  await tokencontract.deployed();

  console.log(
    `COIN CONTRACT DEPLOYED TO POLYGON ADDRESS:${tokencontract.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//COIN CONTRACT DEPLOYED TO POLYGON ADDRESS:0x1B789b7016657bb6859803bAC1b67df5414AE8CE
