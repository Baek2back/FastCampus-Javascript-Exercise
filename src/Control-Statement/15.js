var line = 5;
const [empty, star] = [' ', '*'];

// 1.
var ret = '';
var emptyCount;
var starCount;
for (var i = 1; i <= line; i++) {
  emptyCount = line - i;
  starCount = 2 * i - 1;
  ret += empty.repeat(emptyCount) + star.repeat(starCount);
  ret = i === line ? ret : ret.concat('\n');
}
console.log(ret);

// util
const rangeFromOneToLimit = (limit) => {
  return [...Array(limit).keys()].map((v) => v + 1);
};

// 2.
const rows = rangeFromOneToLimit(line)
  .map((v) => [line - v, 2 * v - 1])
  .map((row) => {
    const [emptyCount, starCount] = row;
    return empty.repeat(emptyCount).concat(star.repeat(starCount));
  });
const ret = rows.join('\n');
console.log(ret);
