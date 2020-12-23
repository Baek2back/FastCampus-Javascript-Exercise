function getDayName(a, b, year = 2016) {
  const zeroBasedA = a - 1;
  const zeroBasedB = b - 1;
  const isLeafYear = (!(year % 4) && year % 100) || !(year % 400);
  const month = [
    31,
    isLeafYear ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  const days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  const dayCnt =
    month
      .filter((_, i) => i < zeroBasedA)
      .reduce((acc, element) => acc + element, 0) + zeroBasedB;
  return days[dayCnt % 7];
}

console.log(getDayName(5, 24)); // TUE
