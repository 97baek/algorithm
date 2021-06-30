function solution(number, k) {
  const arr = number.split("");
  const stack = [];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    while (num > stack[stack.length - 1]) {
      console.log(stack);
      stack.pop();
      count++;
      if (count === k) return stack.join("") + arr.slice(i).join("");
      if (stack.length === 0) break;
    }

    stack.push(num);
  }
  console.log(stack);

  stack.splice(stack.length - k, k);
  return stack.join("");
}
