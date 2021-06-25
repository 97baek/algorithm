const solution = (n, m) => {
  let answer = [];
  let temp = Array.from({ length: m }, () => 0);

  const DFS = (count) => {
    // console.log(count);
    if (count === m) {
      answer.push(temp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        temp[count] = i;
        DFS(count + 1);
      }
    }
  };
  DFS(0);

  return answer;
};

console.log(solution(3, 2));
