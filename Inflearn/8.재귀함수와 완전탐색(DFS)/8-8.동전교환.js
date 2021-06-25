const solution = (n, arr) => {
  let answer = Number.MAX_SAFE_INTEGER;

  const DFS = (count, sum) => {
    if (count > answer) return;
    if (sum > n) return;
    if (sum === n) {
      answer = Math.min(answer, count);
    } else {
      for (let i = 0; i < arr.length; i++) {
        DFS(count + 1, sum + arr[i]);
      }
    }
  };
  DFS(0, 0);

  return answer;
};

console.log(solution(15, [1, 2, 5]));
