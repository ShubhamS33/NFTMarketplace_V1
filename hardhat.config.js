require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.1",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/I7YmIM2LAFwxtfR07AJ2ejBOqKPuq9NV",
      accounts: [
        "86c66bcd5beebddb461767a6ed16778688453639fad713e640453f330f06cda2",
      ],
    },
  },
};