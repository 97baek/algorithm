const solution = (coin, n) => {
  let answer = 0;
  let dp = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;

  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i]; j <= n; j++) {
      dp[j] = Math.min(dp[j - coin[i]] + 1, dp[j]);
    }
  }
  answer = dp[n];
  console.log(dp);

  return answer;
};

console.log(solution([1, 5, 10, 16], 20));

// let answer = 0;

// let dp = Array.from({ length: n + 1 }, () => Number.MAX_SAFE_INTEGER);
// dp[0] = 0;
// console.log(dp);
// let count = 0;

// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < coin.length; j++) {
//     count++;
//     if (coin[j] <= i) dp[i] = Math.min(dp[i - coin[j]] + 1, dp[i]);
//   }
// }
// console.log(dp);
// console.log(count);

// return dp[n];
