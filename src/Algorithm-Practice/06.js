function hideNumbers(str) {
  const regExp = /\d(?=\d{4})/g;
  return str.replace(regExp, '*');
}

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888')); // *****8888
