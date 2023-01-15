const { checkType } = require("./checkType");

const checkPrime = (num) => {
  if (!checkType(num)) {
    throw new Error("Invalid Datatype");
  }
  if (num === 2 || num === 3) {
    return true;
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