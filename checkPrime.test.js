const { checkPrime } = require("./checkPrime");

test(`check if 17 is a prime number`, () => {
  expect(checkArmstrong(153)).toBe(true);
});

test(`check if 153 is a prime number`, () => {
  expect(checkArmstrong(17)).toBe(false);
});

test(`check if given string type to checkArmstrong`, () => {
  expect(() => checkArmstrong("153")).toThrow("Invalid Datatype");
});

test(`check if given null to checkArmstrong`, () => {
  expect(() => checkArmstrong(null)).toThrow("Invalid Datatype");
});
