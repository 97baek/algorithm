const solution = (weight, arr) => {
  const n = arr.length;
  let answer = Number.MIN_SAFE_INTEGER;

  const DFS = (count, sum) => {
    // console.log(count, sum);
    if (sum > weight) return;
    if (count === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(count + 1, sum + arr[count]);
      DFS(count + 1, sum);
    }
  };

  DFS(0, 0);

  return answer;
};

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
