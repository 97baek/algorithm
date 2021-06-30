const solution = (arr) => {
  const dp = Array(arr.length).fill(0);
  dp[0] = 1;

  for (let i = 1; i < arr.length; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && dp[j] > max) {
        max = dp[j];
      }
    }
    dp[i] = max + 1;
  }

  return Math.max(...dp);
};

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));
