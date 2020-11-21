// 1.
var line = 5;
var star = '*';
var empty = ' ';
var ret = '';
for (var i = line; i >= 1; i--) {
  ret += empty.repeat(line - i);
  ret += star.repeat(i);
  ret = i === 1 ? ret : ret.concat('\n');
}
console.log(ret);

// 2.
const lines = [...Array(line).keys()].reverse().map((v) => v + 1);
const ret = lines
  .map((v) => empty.repeat(line - v) + star.repeat(v))
  .join('\n');
console.log(ret);
