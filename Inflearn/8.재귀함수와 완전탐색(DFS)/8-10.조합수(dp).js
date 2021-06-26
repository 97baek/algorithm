const solution = (n, r) => {
  let answer = 0;
  let dp = Array.from(Array(35), () => Array(35).fill(0));

  const DFS = (n, r) => {
    if (dp[n][r] > 0) return dp[n][r];
    if (n === r || r === 0) return 1;
    return (dp[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  };
  answer = DFS(n, r);

  return answer;
};

console.log(solution(33, 19));
