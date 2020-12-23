function sumDivisor(num) {
  const range = Array.from({ length: num }, (_, i) => i + 1);
  return range.reduce(
    (ret, element) => ret + (!(num % element) ? element : 0),
    0
  );
}

console.log(sumDivisor(12)); // 28
