function numberOfPrime(n) {
  const sieve = Array.from({ length: n + 1 }, (_, i) => !(i <= 1));
  sieve.forEach((status, idx, src) => {
    if (status && idx > 1 && idx <= Math.sqrt(n)) {
      for (let next = idx ** 2; next <= n; next += idx) {
        src[next] = false;
      }
    }
  });
  return sieve.filter(status => status).length;
}

console.log(numberOfPrime(10)); // 4
