const checkType = (value) => {
  switch (typeof value) {
    case "number":
      return true;
    case "bigint":
      return true;
    default:
      return false;
  }
}
module.exports = {
  checkType,
}