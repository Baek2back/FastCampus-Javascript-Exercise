function getRestCoordinate(array) {
  const sortedCoordinates = [...array].sort((a, b) => {
    const [aX, aY] = a;
    const [bX, bY] = b;
    return aX === bX ? aY - bY : aX - bX;
  });
  const isLocatedSameSide = (a, b) => {
    const [aX] = a;
    const [bX] = b;
    return aX === bX;
  };
  const [first, second, third] = sortedCoordinates;
  const structuredCoordinates = (isLocatedSameSide(first, second)
    ? [[first, second], [third]]
    : [[first], [second, third]]
  ).sort((a, b) => b.length - a.length);

  return structuredCoordinates.reduce((ret, coordinates) => {
    if (coordinates.length === 2) {
      const [a, b] = coordinates;
      const [, aY] = a;
      const [, bY] = b;
      return [aY, bY];
    }
    const [x, y] = coordinates[0];
    return [x, ...ret.filter(v => v !== y)];
  }, []);
}

console.log(
  getRestCoordinate([
    [1, 4],
    [3, 4],
    [3, 10]
  ])
); // [1, 10]

console.log(
  getRestCoordinate([
    [1, 4],
    [1, 10],
    [3, 10]
  ])
); // [3, 4]

console.log(
  getRestCoordinate([
    [1, 4],
    [3, 4],
    [1, 10]
  ])
); // [3, 10]
