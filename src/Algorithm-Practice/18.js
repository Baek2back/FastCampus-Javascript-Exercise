function fibonacci(n, count = 2, beforePrev = 0, prev = 1) {
  if ([0, 1].includes(n)) return n;
  const current = beforePrev + prev;
  if (n === count) return current;
  return fibonacci(n, count + 1, prev, current);
}

console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
