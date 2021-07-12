/*
input
10 11 12
output
4

input
99999 99999 100000
output
99999
*/

const [a, b, c] = require("fs").readFileSync("./test.txt").toString().split(" ").map(BigInt);

const DFS = (a, b, c) => {
  if (b === BigInt(0)) return BigInt(1);
  else {
    const num = DFS(a, BigInt(parseInt(b / BigInt(2))), c);

    if (b % BigInt(2)) return (((num * num) % c) * a) % c;
    else return (num * num) % c;
  }
};

console.log(Number(DFS(a, b, c)));
