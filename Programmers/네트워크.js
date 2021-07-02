/**
input
n: 3	
computers: [[1, 1, 0], [1, 1, 0], [0, 0, 1]]
output
2

input
n: 3	
computers: [[1, 1, 0], [1, 1, 1], [0, 1, 1]]
output
1
*/

const solution = (n, computers) => {
  let answer = 0;
  let check = Array(n).fill(0);
  let temp = [];

  const DFS = (v) => {
    check[v] = 1;
    for (let i = 0; i < computers.length; i++) {
      if (computers[v][i] === 1 && check[i] === 0) {
        DFS(i);
      }
    }
  };

  for (let i = 0; i < computers.length; i++) {
    if (check[i] === 0) {
      DFS(i);
      answer++;
    }
  }

  return answer;
};
