/*
input
5 7 3
0 2 4 4
1 1 2 5
4 0 6 2
output
3
1 7 13
*/

let [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input.split(" ")[0];
const m = +input.split(" ")[1];
const k = +input.split(" ")[2];
arr = arr.map((row) => row.split(" ").map((n) => +n));
const board = Array.from({ length: n }, () => Array(m).fill(0));
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
const queue = [];

const area = [];
let count = 0;

for (let [x1, y1, x2, y2] of arr) {
  for (let i = y1; i < y2; i++) {
    for (let j = x1; j < x2; j++) {
      board[i][j] = 1;
    }
  }
}

for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[0].length; j++) {
    if (board[i][j] === 0) {
      queue.push([i, j]);
      count++;
      board[i][j] = 1;
      let temp = 1;
      while (queue.length) {
        const [x, y] = queue.shift();
        for (let k = 0; k < 4; k++) {
          const nx = x + dx[k];
          const ny = y + dy[k];
          if (nx >= board.length || nx < 0 || ny >= board[0].length || ny < 0) continue;
          if (board[nx][ny] === 0) {
            temp++;
            queue.push([nx, ny]);
            board[nx][ny] = 1;
          }
        }
      }
      area.push(temp);
    }
  }
}

console.log(count);
console.log(area.sort((a, b) => a - b).join(" "));
