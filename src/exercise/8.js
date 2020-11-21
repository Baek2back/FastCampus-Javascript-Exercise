// 1.
var ret = 0;
for (var i = 1; i < 20; i++) {
  if (i % 2 && i % 3) ret += i;
}
console.log(ret);

// 2.
const numbers = [...Array(20).keys()].filter((v) => v);
const ret = numbers.reduce((ret, number) => {
  if (number % 2 && number % 3) ret += number;
  return ret;
}, 0);
console.log(ret);
