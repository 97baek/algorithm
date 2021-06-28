/**
So when I die (the [first] I will see in (heaven) is a score list).
[ first in ] ( first out ).
Half Moon tonight (At least it is better than no Moon at all].
A rope may form )( a trail in a maze.
Help( I[m being held prisoner in a fortune cookie factory)].
([ (([( [ ] ) ( ) (( ))] )) ]).
 .
.
 */
const [...arr] = require("fs").readFileSync("./test.txt").toString().trim().split("\n");

for (let i = 0; i < arr.length; i++) {
  const stack = [];
  let flag = 0;
  if (arr[i] === ".") return;
  for (let s of arr[i]) {
    if (s === "(" || s === "[") {
      stack.push(s);
    } else if (s === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        console.log("no");
        flag = 1;
        break;
      }
    } else if (s === "]") {
      if (stack[stack.length - 1] === "[") {
        stack.pop();
      } else {
        console.log("no");
        flag = 1;
        break;
      }
    }
  }
  // console.log(i, arr[i], stack, "\n");
  if (flag === 0) {
    console.log(stack.length === 0 ? "yes" : "no");
  }
}

// console.log(arr);
