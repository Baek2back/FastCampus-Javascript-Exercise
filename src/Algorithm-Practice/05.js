function toWeirdCase(s) {
  const sentence = s.toLowerCase();
  const words = sentence.split(' ');
  const newWords = words.map(word =>
    [...word]
      .map((alphabet, idx) => (idx % 2 ? alphabet : alphabet.toUpperCase()))
      .join('')
  );
  return newWords.join(' ');
}

console.log(toWeirdCase('hello world')); // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'
