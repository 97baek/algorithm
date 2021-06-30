const solution = (n, arr) => {
  let answer = 0;
  let dp = Array(n + 1).fill(0);
  dp[0] = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = n; j >= arr[i][1]; j--) {
      dp[j] = Math.max(dp[j - arr[i][1]] + arr[i][0], dp[j]);
    }
  }
  console.log(dp);
  answer = dp[n];

  return answer;
};

let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr));
