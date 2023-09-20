// contract
const CodestatesAttend = artifacts.require("CodestatesAttend");

// makeAbi
const { makeAbi } = require("../utils/makeABI");

module.exports = async function (deployer) {
  await deployer.deploy(CodestatesAttend);
  const CodestatesAttendContract = await CodestatesAttend.deployed();

  makeAbi("CodestatesAttend", CodestatesAttendContract.address);
};
