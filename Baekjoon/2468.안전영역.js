/*
input
5
6 8 2 6 2
3 2 3 4 6
6 7 3 3 2
7 2 5 3 6
8 9 5 2 7
output
5

input
7
9 9 9 9 9 9 9
9 2 1 2 1 2 9
9 1 8 7 8 1 9
9 2 7 9 7 2 9
9 1 8 7 8 1 9
9 2 1 2 1 2 9
9 9 9 9 9 9 9
output
6
*/

let [n, ...arr] = require("fs").readFileSync("./test.txt").toString().trim().split("\n");

n = +n;
arr = arr.map((r) => r.split(" ").map((n) => +n));
const height = [...new Set(arr.flat())].sort((a, b) => a - b);

// console.log(board);
// console.log(height);

let answer = 0;
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
const queue = [];

for (let h = 0; h < height.length; h++) {
  const board = arr.map((r) => r.slice());
  let temp = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // console.log(board);
      if (board[i][j] > height[h]) {
        board[i][j] = 0;
        queue.push([i, j]);
        temp++;
        while (queue.length) {
          const [x, y] = queue.shift();
          for (let k = 0; k < 4; k++) {
            const nx = x + dx[k];
            const ny = y + dy[k];
            if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
            if (board[nx][ny] > height[h]) {
              board[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
          // console.log(i, j, h, height[h], queue, board);
        }
        answer = Math.max(answer, temp);
        // console.log(i, j, h, height[h], temp, board);
      }
    }
  }
}

console.log(answer === 0 ? 1 : answer);
