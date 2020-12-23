function generateRange(from, to) {
  const length = Math.abs(from - to) + 1;
  return Array.from({ length }, (_, i) => i + from);
}

console.log(generateRange(10, 15)); // [ 10, 11, 12, 13, 14, 15 ]
