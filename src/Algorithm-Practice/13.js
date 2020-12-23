function isNotOverlapArray(array) {
  const sortedArray = [...array].sort((a, b) => a - b);
  const [firstElement] = sortedArray;
  if (firstElement !== 1) return false;
  const { length } = sortedArray;
  return sortedArray.every(
    (element, idx, src) => idx === length - 1 || element + 1 === src[idx + 1]
  );
}

console.log(isNotOverlapArray([4, 1, 3, 2])); // true
console.log(isNotOverlapArray([4, 1, 3])); // false
