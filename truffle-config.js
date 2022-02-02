const path = require("path");
const HDWalletProvider = require('@truffle/hdwallet-provider');
const dotenv = require('dotenv');
dotenv.config();
const mnemonic = process.env.BSCTESTNET_MNEMONIC;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    bscTestNet: {
      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545/`),
      network_id: 97,
      skipDryRun: true
    }
  },
  compilers: {
    solc: {
      version: "^0.8.0"
    }
  }
};
