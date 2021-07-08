/**
input
1
1
1 1

output
1


input
5
1000000 1000000 1000000 1000000 1000000
5 7

output
714290


input
5
10 9 10 9 10
7 20

output
10


input
5
10 9 10 9 10
7 2

output
13
*/

let [n, parti, input] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = 0;
n = +n;
parti = parti.split(" ").map((n) => +n);
const b = +input.split(" ")[0];
const c = +input.split(" ")[1];

answer = parti
  .map((n) => {
    return n - b > 0 ? Math.ceil((n - b) / c) : 0;
  })
  .reduce((acc, curr) => (acc += curr), 0);

console.log(answer === 0 ? n : answer + parti.length);
