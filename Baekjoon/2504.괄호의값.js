/**
input
(()[[]])([])

output
28


input
[][]((])

output
0
 */

const str = require("fs").readFileSync("/dev/stdin").toString().trim();

const stack = [];

for (let i = 0; i < str.length; i++) {
  let sum = 0;

  if (str[i] === "(" || str[i] === "[") {
    stack.push(str[i]);
  } else {
    if (str[i] === ")") {
      for (let j = stack.length - 1; j >= 0; j--) {
        if (typeof stack[j] === "number") {
          sum += stack[j];
          stack.pop();
        } else if (stack[j] === "(") {
          sum = sum === 0 ? 2 : sum * 2;
          stack.pop();
          stack.push(sum);
          break;
        } else {
          console.log(0);
          return;
        }
      }
    } else if (str[i] === "]") {
      for (let j = stack.length - 1; j >= 0; j--) {
        if (typeof stack[j] === "number") {
          sum += stack[j];
          stack.pop();
        } else if (stack[j] === "[") {
          sum = sum === 0 ? 3 : sum * 3;
          stack.pop();
          stack.push(sum);
          break;
        } else {
          console.log(0);
          return;
        }
      }
    }
  }
}

const isValid = (stack) => {
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === "(" || stack[i] === ")" || stack[i] === "[" || stack[i] === "]") return false;
  }
  return true;
};

if (stack.length > 0 && isValid(stack)) {
  console.log(stack.reduce((acc, curr) => (acc += curr), 0));
} else {
  console.log(0);
}
