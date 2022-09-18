const Vote = artifacts.require("Vote");
module.exports = function(deployer) {
  // デプロイする
  const contract =  deployer.deploy(Vote);
  console.log("address :  ", contract.address);
  contract;
};