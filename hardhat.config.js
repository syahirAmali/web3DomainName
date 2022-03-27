require("@nomiclabs/hardhat-waffle");
require('dotenv').config()
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
      gas: 12000000,
      allowUnlimitedContractSize: true,
      blockGasLimit: 0x1fffffffffffff,
      mining: {
        auto: true,
        interval: 5000
      },
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.0",
        settings: {},
      },
      {
        version: "0.8.4",
        settings: {},
      },
      {
        version: "0.8.11",
        settings: {},
      },
      {
        version: "0.8.13",
        settings: {},
      },
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      }
    },
  },
};
