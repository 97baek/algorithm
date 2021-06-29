/**
input
4 17

output
4
*/

const [n, k] = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split(" ")
  .map((n) => +n);

const queue = [n];
let curr = 0;
let dist = Array(100001).fill(0);

while (curr < queue.length) {
  const x = queue[curr++];
  if (x === k) return console.log(dist[x]);
  for (let nx of [x - 1, x + 1, x * 2]) {
    if (nx < 0 || nx >= 100001) continue;
    if (dist[nx] > 0) continue;
    dist[nx] = dist[x] + 1;
    queue.push(nx);
  }
}
