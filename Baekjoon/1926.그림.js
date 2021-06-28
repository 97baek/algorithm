/**
input
6 5
1 1 0 1 1
0 1 1 0 0
0 0 0 0 0
1 0 1 1 1
0 0 1 1 1
0 0 1 1 1

output
4
9
 */

let [input, ...board] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = input.split(" ")[0];
const m = input.split(" ")[1];
board = board.map((v) => v.split(" ").map((n) => +n));

const queue = [];
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let answer = Number.MIN_SAFE_INTEGER;
let count = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 1) {
      let area = 1;
      queue.push([i, j]);
      board[i][j] = 0;
      while (queue.length > 0) {
        const [x, y] = queue.shift();
        for (let k = 0; k < 4; k++) {
          const nx = x + dx[k];
          const ny = y + dy[k];
          if (nx >= 0 && nx < n && ny >= 0 && ny < m && board[nx][ny] === 1) {
            area++;
            board[nx][ny] = 0;
            queue.push([nx, ny]);
          }
        }
      }
      answer = Math.max(area, answer);
      count++;
    }
  }
}

console.log(count);
console.log(count === 0 ? 0 : answer);
