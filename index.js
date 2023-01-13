const arm = 153;
const prime = 17;

const checkArmstrong = (num) => {
  const strNum = String(num);
  let total = 0;
  for (let i = 0; i < strNum.length; i++) {
    total += Math.pow(Number(strNum[i]), 3);
  }
  console.log(total, num);
  if (total === num) {
    console.log("The number is an armstrong number.")
  } else {
    console.log("The number is NOT an armstrong number.");
  }
}

const checkPrime = (num) => {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      console.log("The number is NOT a prime number.");
      return;
    }

  }
  console.log("The number is a prime number.");
}

checkArmstrong(arm);
checkPrime(prime);