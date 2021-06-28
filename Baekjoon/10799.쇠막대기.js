/**
()(((()())(())()))(()) - 17
(((()(()()))(())()))(()()) - 24
 */

const str = require("fs").readFileSync("/dev/stdin").toString().trim().split("/s/").join("");

const stack = [];
let answer = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === "(") stack.push(str[i]);
  else {
    stack.pop();
    if (str[i - 1] === ")") {
      answer++;
    } else {
      answer += stack.length;
    }
  }
}

console.log(answer);
