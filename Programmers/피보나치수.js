const solution = (n) => {
  //     const dp = new Array(n+1).fill(0)

  //     const fibo = L => {
  //         if (dp[L] > 0) return dp[L];
  //         if(L<=2) return dp[L]=1;
  //         return dp[L] = (fibo(L-2) + fibo(L-1)) % 1234567;
  //     }

  const dp = [0, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }

  return dp[n];
};
