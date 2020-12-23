function numPY(s) {
  const result = [/p/gi, /y/gi].map(regExp => {
    const search = s?.match(regExp);
    return search ? search.length : 0;
  });
  const [pCnt, yCnt] = result;
  return pCnt === yCnt;
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy')); // false
console.log(numPY('ab')); // true
console.log(numPY('')); // true
console.log(numPY()); // true
