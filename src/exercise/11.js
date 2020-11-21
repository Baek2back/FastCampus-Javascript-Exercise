// 1.
var line = 5;
var star = '*';
var ret = '';
for (var i = 1; i <= line; i++) {
  ret += star.repeat(i);
  ret = i === line ? ret : ret.concat('\n');
}
console.log(ret);

// 2.
const lines = [...Array(line).keys()].map((v) => v + 1);
const ret = lines.map((line) => star.repeat(line)).join('\n');
console.log(ret);
