function digitSum(n) {
  if (n > 100000000) return false;
  // ver 1.
  return [...(n + '')].reduce((ret, element) => ret + Number(element), 0);

  // ver 2.
  // let digits = n;
  // let sumOfDigits = 0;
  // while (digits) {
  //   const current = digits % 10;
  //   sumOfDigits += current;
  //   digits = Math.floor(digits / 10);
  // }
  // return sumOfDigits;
}

console.log(digitSum(123)); // 6
console.log(digitSum(987)); // 24
console.log(digitSum(100000001)); // false
