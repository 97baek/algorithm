/**
input
baabaa
output
1

input
cdcd
output
0
*/

const solution = (s) => {
  const stack = [];
  for (let char of s) {
    if (char === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.length ? 0 : 1;
};
