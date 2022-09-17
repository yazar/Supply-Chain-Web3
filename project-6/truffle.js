
const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "11802c1c7e48433fab39b85597bbc4eb";
const mnemonic = "a58e8930323a48363a18a569633ff0e1c0ed5ffe6ecd75fab8135cf3e871507a"; // 

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000,
    }
  },

 

  compilers: {
    solc: {
      version: '^0.4.23'
    }
  }
};