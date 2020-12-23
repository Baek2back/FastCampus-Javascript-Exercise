function findMinDistance(array) {
  const coordinates = array.reduce(
    (ret, element, idx, src) =>
      idx === src.length - 1 ? ret : [...ret, [element, src[idx + 1]]],
    []
  );
  const sortedCoordinates = [...coordinates]
    .map(coordinate => {
      const [x, y] = coordinate;
      return [...coordinate, Math.abs(x - y)];
    })
    .sort((a, b) => {
      const [, , aDistance] = a;
      const [, , bDistance] = b;
      return aDistance - bDistance;
    });
  const [, , minDistance] = sortedCoordinates[0];
  const minDistanceCoordinates = sortedCoordinates.filter(status => {
    const [, , distance] = status;
    return minDistance === distance;
  });
  return minDistanceCoordinates.map(status => {
    const [x, y] = status;
    return [x, y];
  });
}

// 1차원 점의 배열
var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
console.log(findMinDistance(array)); // [[3, 4], [23, 24]]
