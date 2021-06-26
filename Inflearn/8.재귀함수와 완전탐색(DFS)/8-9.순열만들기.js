const solution = (n, arr) => {
  const answer = [];
  let temp = Array.from({ length: n }, () => 0);
  let ch = Array.from({ length: arr.length }, () => 0);

  const DFS = (count) => {
    if (count === n) {
      answer.push(temp.slice());
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (ch[i] === 0) {
          temp[count] = arr[i];
          ch[i] = 1;
          DFS(count + 1);
          ch[i] = 0;
        }
      }
    }
  };

  DFS(0);

  return answer;
};

console.log(solution(2, [3, 6, 9, 12]));
