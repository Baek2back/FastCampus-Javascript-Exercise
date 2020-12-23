function average(array = []) {
  const { length } = array;
  return length ? array.reduce((ret, v) => ret + v, 0) / length : 0;
}

console.log(average([5, 3, 4])); // 4
console.log(average([])); // 0
console.log(average()); // 0
