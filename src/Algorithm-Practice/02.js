const getCountEightInNumber = number => {
  let count = 0;
  const strNumber = number + '';
  for (const digit of strNumber) {
    if (digit === '8') count += 1;
  }
  return count;
};

function getCount8(limit) {
  let answer = 0;
  let current = limit;
  while (current) {
    answer += getCountEightInNumber(current);
    current -= 1;
  }
  return answer;
}

const rangeFromOneToLimit = limit =>
  Array.from({ length: limit }, (_, i) => i + 1);

function getCount8withReduce(limit) {
  const range = rangeFromOneToLimit(limit);
  return range.reduce((ret, number) => ret + getCountEightInNumber(number), 0);
}

console.log(getCount8(10000)); // 4000
console.log(getCount8withReduce(10000)); // 4000
