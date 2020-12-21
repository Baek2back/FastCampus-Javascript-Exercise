// 1.
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

// 2.
const dice = [1, 2, 3, 4, 5, 6];
const getPermutationsWithDuplicates = (arr, toSelectNumber) => {
  if (toSelectNumber === 1) return arr.map(value => [value]);
  return arr.reduce((result, fixed, index, origin) => {
    const rest = [...origin.slice(0)];
    const permutations = getPermutationsWithDuplicates(
      rest,
      toSelectNumber - 1
    );
    const attached = permutations.map(permutation => [fixed, ...permutation]);
    return [...result, ...attached];
  }, []);
};

const results = getPermutationsWithDuplicates(dice, 2).filter(v => {
  const [first, second] = v;
  return first + second === 6;
});

for (const result of results) {
  console.log(result);
}
