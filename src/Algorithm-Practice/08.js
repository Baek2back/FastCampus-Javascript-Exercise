function waterMelon(n) {
  const times = Math.floor(n / 2);
  const isOdd = n % 2;
  return '수박'.repeat(times) + (isOdd ? '수' : '');
}

console.log('n이 3인 경우: ' + waterMelon(3));
console.log('n이 4인 경우: ' + waterMelon(4));
