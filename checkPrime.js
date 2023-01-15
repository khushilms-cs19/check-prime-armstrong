const { checkType } = require("./checkType");

const checkPrime = (num) => {
  if (!checkType(num)) {
    return new Error("Invalid Datatype");
  }
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = {
  checkPrime,
}