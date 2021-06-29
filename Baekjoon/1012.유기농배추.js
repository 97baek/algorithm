/**
input
2
10 8 17
0 0
1 0
1 1
4 2
4 3
4 5
2 4
3 4
7 4
8 4
9 4
7 5
8 5
9 5
7 6
8 6
9 6
10 10 1
5 5

output
5
1
*/

let [n, ...input] = require("fs").readFileSync("./test.txt").toString().trim().split("\n");

let arr = [];
let size = [];
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
input = input.map((n) => n.split(" "));

n = +n;
// console.log(n);
for (let i = 0; i < input.length; i++) {
  if (input[i].length === 3) {
    // console.log(i);
    arr.push(input.slice(i + 1, +input[i][2] + i + 1));
    size.push([input[i][0], input[i][1]]);
  }
}
arr = arr.map((r) => r.map((c) => c.map((n) => +n)));
size = size.map((r) => r.map((n) => +n));
// console.log(size);

for (let i = 0; i < arr.length; i++) {
  const board = Array.from({ length: size[i][1] }, () => Array(size[i][0]).fill(0));
  for (let j = 0; j < arr[i].length; j++) {
    const [y, x] = arr[i][j];
    board[x][y] = 1;
  }
  const queue = [];
  let count = 0;
  for (let n = 0; n < board.length; n++) {
    for (let m = 0; m < board[n].length; m++) {
      let curr = 0;
      // console.log(board);
      if (board[n][m] === 1) {
        queue.push([n, m]);
        board[n][m] = 0;
        count++;
        while (curr < queue.length) {
          const [x, y] = queue[curr++];
          for (let k = 0; k < 4; k++) {
            const nx = x + dx[k];
            const ny = y + dy[k];
            if (nx < 0 || nx >= board.length || ny < 0 || ny >= board[i].length) continue;
            if (board[nx][ny] === 1) {
              board[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
  }
  console.log(count);
}
