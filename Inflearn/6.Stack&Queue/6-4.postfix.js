const solution = (numbers) => {
  let answer = 0;
  const stack = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= "0" && numbers[i] < "9") {
      stack.push(numbers[i]);
    } else {
      console.log(left, right);
      let right = +stack.pop();
      let left = +stack.pop();
      if (numbers[i] === "+") {
        stack.push(left + right);
      } else if (numbers[i] === "-") {
        stack.push(left - right);
      } else if (numbers[i] === "*") {
        stack.push(left * right);
      } else if (numbers[i] === "/") {
        stack.push(left / right);
      }
    }
    console.log(answer);
  }

  return stack[0];
};

const numbers = "352+*9-";
console.log(solution(numbers));
