const { checkType } = require("./checkType");
// import { checkType } from "./checkType.js";
const checkArmstrong = (num) => {
  if (!checkType(num)) {
    throw new Error("Invalid Datatype");
  }
  const strNum = String(num);
  const digits = strNum.length;
  let total = 0;
  for (let i = 0; i < strNum.length; i++) {
    total += Math.pow(Number(strNum[i]), digits);
  }
  // console.log(total, num);
  if (total === num) {
    return true;
  } else {
    return false;
  }
}
console.log(checkArmstrong(153))

module.exports = {
  checkArmstrong,
}