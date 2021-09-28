module.exports = {
  networks: {
    local: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  ,
  compilers: {
    solc: {
      version: "^0.6.2",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  }}
};
