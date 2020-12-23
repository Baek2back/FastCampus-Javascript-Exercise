function evenOrOdd(num) {
  const result = ['Even', 'Odd'];
  return result[num % 2];
}

console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(1000)); // Even
