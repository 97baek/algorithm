/**
input
"[](){}"
output
3

input
"}]()[{"	
output
2

input
"[)(]"	
output
0

input
"}}}"
output
0
 */

const solution = (s) => {
  if (s.length % 2 === 1) return 0;
  let answer = 0;
  const pairs = {
    "[": "]",
    "{": "}",
    "(": ")",
  };
  const stack = [];
  const open = Object.keys(pairs);
  let head = 0;
  let str = s + s;

  for (let i = 0; i < s.length; i++) {
    let flag = true;
    let temp = str.slice(i, i + s.length);
    for (let j = 0; j < temp.length; j++) {
      if (open.includes(temp[j])) {
        stack.push(temp[j]);
      } else {
        if (pairs[stack[stack.length - 1]] === temp[j]) {
          stack.pop();
        } else {
          flag = false;
          break;
        }
      }
    }
    if (flag && stack.length === 0) answer++;
  }
  return answer;
};
