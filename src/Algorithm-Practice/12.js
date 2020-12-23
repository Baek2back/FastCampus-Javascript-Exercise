function uniq(array) {
  // ver 1.
  // return [...new Set(array)];

  // ver 2.
  return array.reduce((ret, v) => (ret.includes(v) ? ret : [...ret, v]), []);
}

console.log(uniq([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]
