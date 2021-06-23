const solution = (arr) => {
  const stack = [];
  const answer = [];
  const result = [];
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    console.log(answer, stack);
    if (arr[i] < stack[stack.length - 1]) {
      return "NO";
    } else {
      for (let j = max + 1; j <= arr[i]; j++) {
        stack.push(j);
        answer.push("+");
      }
      max = Math.max(stack.pop(), max);
      answer.push("-");
    }
  }

  return answer;
};

const arr1 = [4, 3, 6, 8, 7, 5, 2, 1];
const arr2 = [1, 2, 5, 3, 4];

console.log(solution(arr1));
