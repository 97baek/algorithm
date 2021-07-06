/*
input
7
0110100
0110101
1110101
0000111
0100000
0111110
0111000
output
3
7
8
9

input
5
10101
01111
11111
01011
10111
output
3
1
1
17
*/

let [n, ...arr] = require("fs").readFileSync("./test.txt").toString().trim().split("\n");

n = +n;
const map = arr.map((r) => r.split("").map((n) => +n));
const queue = [];
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
const answer = [];
let count = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (map[i][j] === 1) {
      let temp = 1;
      queue.push([i, j]);
      map[i][j] = 0;
      count++;
      while (queue.length) {
        const [x, y] = queue.shift();
        for (let k = 0; k < 4; k++) {
          const nx = x + dx[k];
          const ny = y + dy[k];
          if (nx >= n || nx < 0 || ny >= n || ny < 0) continue;
          if (map[nx][ny] === 1) {
            map[nx][ny] = 0;
            temp++;
            queue.push([nx, ny]);
          }
        }
      }
      answer.push(temp);
    }
  }
}

console.log(count);
for (let c of answer.sort((a, b) => a - b)) {
  console.log(c);
}
