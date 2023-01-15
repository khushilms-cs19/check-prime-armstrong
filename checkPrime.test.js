const { checkPrime } = require("./checkPrime");

test(`check if 17 is a prime number`, () => {
  expect(checkPrime(17)).toBe(true);
});

test(`check if 64 is a prime number`, () => {
  expect(checkPrime(64)).toBe(false);
});

test(`check if given string type to checkPrime`, () => {
  expect(() => checkPrime("153")).toThrow("Invalid Datatype");
});

test(`check if given null to checkPrime`, () => {
  expect(() => checkPrime(null)).toThrow("Invalid Datatype");
});
