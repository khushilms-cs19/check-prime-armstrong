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

const checkArmstrongBetter = (num) => {
  let numNew = num;
  let total = 0;
  const len = num.toString().length;
  for (let i = 0; i < len; i++) {
    let dig = numNew % 10;
    total += Math.pow(dig, 3);
    numNew = Math.floor(numNew / 10);
  }
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

checkPrime(prime);
checkArmstrong(arm);
checkArmstrongBetter(arm);