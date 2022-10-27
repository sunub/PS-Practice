const fibo = (n) => {
  if (n <= 2) return 1;
  return fibo(n - 1) + fibo(n - 2);
};

console.log(fibo(50));

const meomofib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = meomofib(n - 1, memo) + meomofib(n - 2, memo);
  return memo[n];
};

// console.log(meomofib(50));
