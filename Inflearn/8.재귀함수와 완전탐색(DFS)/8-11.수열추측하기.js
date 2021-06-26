const solution = (n, target) => {
  let answer;
  let dp = Array.from({ length: 11 }, () => Array(11).fill(0));
  let p = Array.from({ length: n }, () => 0);
  let ch = Array.from({ length: n + 1 }, () => 0);
  let initArr = Array.from({ length: n });
  let flag = 0;

  const DFS = (L, sum) => {
    if (flag) return;
    if (L === n && sum === target) {
      answer = p.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          p[L] = i;
          ch[i] = 1;
          DFS(L + 1, sum + initArr[L] * p[L]);
          ch[i] = 0;
        }
      }
    }
  };

  const getComb = (n, r) => {
    if (dp[n][r] > 0) return dp[n][r];
    if (n === r || r === 0) return 1;
    return (dp[n][r] = getComb(n - 1, r - 1) + getComb(n - 1, r));
  };

  for (let i = 0; i < initArr.length; i++) {
    initArr[i] = getComb(n - 1, i);
  }

  DFS(0, 0);

  return answer;
};

console.log(solution(4, 16));
