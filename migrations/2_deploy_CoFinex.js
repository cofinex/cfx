const TokenMintERC20MintableToken = artifacts.require("Migrations");

module.exports = function(deployer) {
  deployer.deploy(TokenMintERC20MintableToken);
};
