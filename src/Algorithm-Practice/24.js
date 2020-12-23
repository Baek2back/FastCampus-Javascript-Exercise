function getArray(arr) {
  return arr.filter(element => !(element % 2) && element > 3);
}

console.log(getArray([1, 2, 3, 4, 5, 6])); // [ 4, 6 ]
