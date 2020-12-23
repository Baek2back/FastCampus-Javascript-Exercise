function checkPalindrom(str) {
  // ver 1.
  // return [...str].reverse().join('') === str;

  // ver 2.
  const { length } = str;
  const mid = Math.floor(length / 2);
  return [...str].every(
    (alphabet, idx, src) => idx >= mid || alphabet === src[length - 1 - idx]
  );
}

console.log(checkPalindrom('dad')); // true
console.log(checkPalindrom('mom')); // true
console.log(checkPalindrom('palindrom')); // false
console.log(checkPalindrom('s')); // true
