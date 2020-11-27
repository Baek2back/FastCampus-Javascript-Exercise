// 1.
var ret = 0;
for (var i = 0; i < 10; i++) {
  ret += i;
}
console.log(ret);

// 2.
const numbers = [...Array(10).keys()];
const ret = numbers.reduce((ret, number) => ret + number, 0);
console.log(ret);
