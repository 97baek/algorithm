/**
input
4 4
####
#JF#
#..#
#..#

output
3

 */

let [input, ...board] = require("fs").readFileSync("./test.txt").toString().trim().split("\n");

const fireQ = [];
const pathQ = [];
const n = +input.split(" ")[0];
const m = +input.split(" ")[1];
board = board.map((v) => v.split(""));
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let curr = 0;

const fire = Array.from({ length: n }, () => Array(m).fill(-1));
const path = Array.from({ length: n }, () => Array(m).fill(-1));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === "F") {
      fireQ.push([i, j]);
      fire[i][j] = 0;
    } else if (board[i][j] === "J") {
      path[i][j] = 0;
      pathQ.push([i, j]);
    }
  }
}

while (curr < fireQ.length) {
  const [x, y] = fireQ[curr];
  for (let k = 0; k < 4; k++) {
    const nx = x + dx[k];
    const ny = y + dy[k];

    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
    if (fire[nx][ny] >= 0 || board[nx][ny] === "#") continue;
    fire[nx][ny] = fire[x][y] + 1;
    fireQ.push([nx, ny]);
  }
  curr++;
}

curr = 0;
console.log(fire);
while (curr < pathQ.length) {
  const [x, y] = pathQ[curr];
  for (let k = 0; k < 4; k++) {
    const nx = x + dx[k];
    const ny = y + dy[k];
    if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
      return console.log(path[x][y] + 1);
    }
    if (path[nx][ny] >= 0 || board[nx][ny] === "#") continue;
    if (fire[x][y] === -1 || fire[nx][ny] > path[x][y] + 1) {
      path[nx][ny] = path[x][y] + 1;
      pathQ.push([nx, ny]);
    }
  }
  curr++;
}

console.log("IMPOSSIBLE");
