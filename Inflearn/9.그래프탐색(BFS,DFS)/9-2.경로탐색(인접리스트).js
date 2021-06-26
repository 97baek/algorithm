const solution = (n, arr) => {
  let graph = Array.from({ length: n + 1 }, () => Array());
  let ch = Array(n + 1).fill(0);
  let answer = [];
  let path = [];

  for (let [x, y] of arr) {
    graph[x].push(y);
  }

  const DFS = (L) => {
    if (L === n) {
      answer.push(path.slice());
    } else {
      for (let i = 0; i < graph[L].length; i++) {
        let next = graph[L][i];
        if (ch[next] === 0) {
          ch[next] = 1;
          path.push(next);
          DFS(next);
          ch[next] = 0;
          path.pop();
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
