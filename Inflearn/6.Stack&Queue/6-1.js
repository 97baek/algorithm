const solution = (str) => {
  const stack = [];
  let arr = str.split("");
  let count = 0;

  while (arr.length > 0) {
    if (arr[0] === "(") {
      const p = arr.shift();
      stack.push(p);
    } else {
      stack.pop();
      if (stack.length > 0) {
        console.log(count);
        return "NO";
      }
    }
    count++;
  }

  return "YES";
};

const str = "(()(()))(()";
console.log(solution(str));
