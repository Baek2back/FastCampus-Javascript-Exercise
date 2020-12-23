function isHarshad(n) {
  // ver 1.
  // const strN = n + '';
  // return !(n % [...strN].reduce((ret, element) => ret + Number(element), 0));

  // ver 2.
  let digits = n;
  let sumOfDigits = 0;
  while (digits) {
    const current = digits % 10;
    sumOfDigits += current;
    digits = Math.floor(digits / 10);
  }
  return !(n % sumOfDigits);
}

console.log(isHarshad(10)); // true
console.log(isHarshad(12)); // true
console.log(isHarshad(18)); // true
console.log(isHarshad(11)); // false
console.log(isHarshad(13)); // false
