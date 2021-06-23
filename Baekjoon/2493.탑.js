const arr = [6, 9, 5, 7, 4];
const stack = [[arr[0], 1]];
const answer = [0];

for (let i = 1; i < arr.length; i++) {
  arr[i] = [arr[i], i + 1];
  while (stack.length > 0) {
    if (arr[i][0] < stack[stack.length - 1][0]) {
      answer.push(stack[stack.length - 1][1]);
      break;
    }
    stack.pop();
  }
  if (stack.length === 0) answer.push(0);
  stack.push(arr[i]);
}

console.log(answer.join(" "));
