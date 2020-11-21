var ret = [];
for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 6; j++) {
    // 1.
    if (i + j === 6) ret.push([i, j]);
    // 2.
    if (i + j === 6) ret = [...ret, [i, j]];
  }
}
console.log(ret);
