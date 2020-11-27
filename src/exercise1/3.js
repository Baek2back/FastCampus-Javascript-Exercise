// 조건문을 이용한 방식
var ret = '';
for (var i = 0; i < 10; i++) {
  if (!(i % 2)) ret += i;
}
console.log(ret);

// 증감식을 이용한 방식
var ret = '';
for (var i = 0; i < 10; i += 2) {
  ret += i;
}
console.log(ret);
