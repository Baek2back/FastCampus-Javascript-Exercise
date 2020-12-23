function findDuplicated(array) {
  const valueMap = array.reduce((map, value) => {
    map[value] = map[value] ? map[value] + 1 : 1;
    return map;
  }, []);
  return [...valueMap.entries()].reduce(
    (ret, [number, count]) => (count > 1 ? [...ret, number] : ret),
    []
  );
}

console.log(findDuplicated([1, 2, 3, 4, 1, 2, 3])); // [ 1, 2, 3 ]
