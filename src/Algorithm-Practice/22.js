function adder(x, y) {
  const countNumberInRange = Math.abs(x - y) + 1;
  const isOdd = countNumberInRange % 2;
  const sumOfBoundary = x + y;
  const numOfPairs = Math.floor(countNumberInRange / 2);
  const center = Math.floor((x + y) / 2);
  return sumOfBoundary * numOfPairs + (isOdd ? center : 0);
}

console.log(adder(3, 5)); // 12
console.log(adder(3, -5)); // -9
