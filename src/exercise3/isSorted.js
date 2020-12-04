function isSorted(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) return false;
  }
  return true;
}

console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([2, 3, 4, 1, 5]));
