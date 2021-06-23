// const solution = (arr) => {
//   let answer = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const stack = [arr[i]];
//     for (let j = i + 1; j < arr.length; j++) {
//       if (stack[stack.length - 1][1] <= arr[j][0]) {
//         stack.push(arr[j]);
//       }
//     }

//     answer = Math.max(answer, stack.length);
//   }

//   return answer;
// };

const solution = (arr) => {
  let answer = [];
  let index = 0;
  arr.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

  for (let i = 0; i < arr.length; i++) {
    if (index <= arr[i][0]) {
      answer.push(arr[i]);
      index = arr[i][1];
    }
  }

  return answer;
};

let arr = [
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log(solution(arr));
