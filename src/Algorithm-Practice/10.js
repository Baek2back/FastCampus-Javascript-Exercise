function getMaxValueFromArray(array = []) {
  if (!array.length) return 0;
  return Math.max(...array);
}
console.log(getMaxValueFromArray()); // 0
console.log(getMaxValueFromArray([])); // 0
console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7

function getMinValueFromArray(array = []) {
  if (!array.length) return 0;
  return Math.min(...array);
}
console.log(getMinValueFromArray()); // 0
console.log(getMinValueFromArray([])); // 0
console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5
