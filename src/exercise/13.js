// 1.
var line = 5;
var star = '*';
var ret = '';
for (var i = line; i >= 1; i--) {
  ret += star.repeat(i);
  ret = ret.concat('\n');
}
console.log(ret);

// 2.
const lines = [...Array(line).keys()].reverse().map((v) => v + 1);
const ret = lines.map((line) => star.repeat(line)).join('\n');
console.log(ret);
