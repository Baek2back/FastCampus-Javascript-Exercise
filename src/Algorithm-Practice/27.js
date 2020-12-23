function specialSort(array) {
  const [negatives, positives] = array.reduce(
    (ret, element) => {
      let [negatives, positives] = ret;
      if (element > 0) {
        positives = [...positives, element];
      } else if (element < 0) {
        negatives = [...negatives, element];
      }
      return [[...negatives], [...positives]];
    },
    [[], []]
  );
  return [
    ...negatives.sort((a, b) => b - a),
    0,
    ...positives.sort((a, b) => a - b),
  ];
}

const testArray = [-1, 1, 3, -2, 2, 0];

console.log(testArray); // [ -1, 1, 3, -2, 2, 0 ]
console.log(specialSort(testArray)); // [ -1, -2, 0, 1, 2, 3 ]
console.log(testArray); // [ -1, 1, 3, -2, 2, 0 ]
