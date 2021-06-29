/**
input
4 6
101111
101010
101011
111011

output
15


input
4 6
110110
110110
111111
111101

output
9


input
2 25
1011101110111011101110111
1110111011101110111011101

output
38


input
7 7
1011111
1110001
1000001
1000001
1000001
1000001
1111111

output
13
 */

let [input, ...board] = require("fs").readFileSync("./test.txt").toString().trim().split("\n");

const queue = [];
const n = +input.split(" ")[0];
const m = +input.split(" ")[1];
board = board.map((v) => v.split("").map((n) => +n));
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let dist = Array.from({ length: n }, () => Array(m).fill(-1));
dist[0][0] = 1;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 1) {
      queue.push([i, j]);
      while (queue.length) {
        const [x, y] = queue.shift();
        for (let k = 0; k < 4; k++) {
          const nx = x + dx[k];
          const ny = y + dy[k];
          if (
            nx >= 0 &&
            nx < n &&
            ny >= 0 &&
            ny < m &&
            board[nx][ny] === 1 &&
            dist[nx][ny] === -1
          ) {
            dist[nx][ny] = dist[x][y] + 1;
            queue.push([nx, ny]);
          }
        }
      }
    }
  }
}

console.log(dist[n - 1][m - 1]);
