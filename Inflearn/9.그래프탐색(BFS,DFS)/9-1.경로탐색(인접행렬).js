const solution = (n, arr) => {
  let graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  let ch = Array(n + 1).fill(0);
  const answer = [];
  let path = [];

  for (let [x, y] of arr) {
    graph[x][y] = 1;
  }

  const DFS = (L) => {
    if (L === n) {
      answer.push(path.slice());
      console.log(path);
    } else {
      for (let i = 1; i <= n; i++) {
        console.log(L, i, path, ch);
        if (ch[i] === 0 && graph[L][i] === 1) {
          ch[i] = 1;
          path.push(i);
          console.log(L, i, path, ch);
          DFS(i);
          path.pop();
          ch[i] = 0;
        }
      }
    }
  };

  path.push(1);
  ch[1] = 1;
  DFS(1);
  console.log(graph);

  return answer;
};

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
