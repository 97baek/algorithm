const [n, x, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((n) => +n);

const queue = Array.from({ length: n }, (v, i) => i + 1);
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === queue[0]) {
    queue.shift();
  } else {
    if (queue.indexOf(arr[i]) >= queue.length - queue.indexOf(arr[i])) {
      while (queue[0] !== arr[i]) {
        queue.unshift(queue.pop());
        count++;
      }
    } else {
      while (queue[0] !== arr[i]) {
        queue.push(queue.shift());
        count++;
      }
    }
    queue.shift();
  }
}

console.log(count);
