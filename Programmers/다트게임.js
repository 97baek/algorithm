const solution = (result) => {
  let answer = 0;
  const stack = [];

  for (let i = 0; i < result.length; i++) {
    if (result[i] >= "0" && result[i] <= "9") {
      stack.push(+result[i]);
    } else if (result[i] === "S") {
      continue;
    } else if (result[i] === "D") {
      stack[stack.length - 1] **= 2;
    } else if (result[i] === "T") {
      stack[stack.length - 1] **= 3;
    } else if (result[i] === "*") {
      stack[stack.length - 1] *= 2;
      stack[stack.length - 2] *= 2;
    } else if (result[i] === "#") {
      stack[stack.length - 1] = -stack[stack.length - 1];
    }
    if (stack[stack.length - 1] === 0 && stack[stack.length - 2] === 1) {
      stack.pop();
      stack.pop();
      stack.push(10);
    }
  }
  answer = stack.reduce((acc, curr) => (acc += curr), 0);
  return answer;
};
