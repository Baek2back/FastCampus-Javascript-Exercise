function adjacentElementsProduct(arr) {
  const { length } = arr;
  const products = arr
    .reduce(
      (ret, element, idx, src) =>
        idx === length - 1 ? ret : [...ret, element * src[idx + 1]],
      []
    )
    .sort((a, b) => b - a);
  const [highest] = products;
  return highest;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
