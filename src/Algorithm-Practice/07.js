function strToInt(str) {
  let sign = 1;
  let strNumber = str;
  const [first, ...rest] = str;
  if (['+', '-'].includes(first)) {
    sign = first === '+' ? 1 : -1;
    strNumber = rest.join('');
  }
  return +strNumber * sign;
}

console.log(strToInt('1234')); // 1234
console.log(strToInt('-1234')); // -1234
console.log(strToInt('+1234')); // 1234
