function getCurrentWeek() {
  const currentDay = new Date();
  const orderOfDay = currentDay.getDay();
  const [year, month, day] = [
    currentDay.getFullYear(),
    currentDay.getMonth() + 1,
    currentDay.getDate(),
  ];
  const answer = Array.from({ length: 7 }, (_, i) => i);
  return answer.map((element) => {
    if (element === orderOfDay) {
      return [year, month, day].join('-');
    }
    const isOver = orderOfDay - element < 0;
    const diff = Math.abs(orderOfDay - element);
    return [year, month, day + (isOver ? diff : -diff)].join('-');
  });
}

console.log(getCurrentWeek());
/*
오늘이 2020-04-21인 경우,
[
  '2020-04-19',
  '2020-04-20',
  '2020-04-21',
  '2020-04-22',
  '2020-04-23',
  '2020-04-24',
  '2020-04-25'
]
*/
