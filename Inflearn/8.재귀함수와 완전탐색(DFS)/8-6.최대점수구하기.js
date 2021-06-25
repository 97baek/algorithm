const solution = (arr, limit) => {
  let answer = Number.MIN_SAFE_INTEGER;

  const DFS = (count, sum, curr) => {
    if (curr > limit) return;
    if (count === arr.length) {
      answer = Math.max(answer, sum);
    } else {
      DFS(count + 1, sum + arr[count][0], curr + arr[count][1]);
      DFS(count + 1, sum, curr);
    }
  };

  DFS(0, 0, 0);
  return answer;
};

let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];

// let arr = [10, 25, 15, 6, 7];
// let time = [5, 12, 8, 3, 4];
console.log(solution(arr, 20));
