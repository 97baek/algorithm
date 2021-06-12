const solution = (arr) => {
  const stack = [];
  const answer = [];
  let count = 1;

  for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i], stack);

    while (count <= arr[i]) {
      stack.push(count);
      count++;
      answer.push("+");
    }
    if (stack[stack.length - 1] === arr[i]) {
      stack.pop();
      answer.push("-");
    } else {
      return "No";
    }
    console.log(i, arr[i], stack);
  }
  return answer;
};

const arr1 = [4, 3, 6, 8, 7, 5, 2, 1];
const arr2 = [1, 2, 5, 3, 4];

console.log(solution(arr1));
