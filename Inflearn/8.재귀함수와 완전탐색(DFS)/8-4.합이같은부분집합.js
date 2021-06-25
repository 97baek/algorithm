const solution = (arr) => {
  let answer = "NO";
  let flag = 0;
  const n = arr.length;
  const total = arr.reduce((acc, curr) => (acc += curr), 0);
  const DFS = (curr, sum) => {
    // if (answer === "YES") return;
    if (flag === 1) return;
    if (curr === n) {
      console.log(curr, sum, n);
      if (total - sum === sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      DFS(curr + 1, sum + arr[curr]);
      DFS(curr + 1, sum);
    }
  };

  DFS(0, 0);

  return answer;
};

console.log(solution([1, 3, 5, 6, 7, 10]));
