// const solution = (str) => {
//   const arr = str.split("");
//   let stack = [];
//   let answer = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "(") {
//       if (stack.length > 0 && !stack.includes(arr[i])) {
//         answer.push(stack);
//       }
//       stack = [];
//       stack.push(arr[i]);
//     } else if (arr[i] === ")") {
//       stack = [];
//     } else if (arr[i] >= "A" && arr[i] <= "Z") {
//       stack.push(arr[i]);
//     }
//   }
//   const s = [];
//   console.log([...answer[0], ...answer[1]]);
//   for (let i = 0; i < answer.length; i++) {
//     s.push(...answer[i]);
//   }
//   return s.join("");
// };

// const solution = (str) => {
//   let answer = "";
//   const stack = [];

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== ")") stack.push(str[i]);
//     else {
//       while (stack.pop() !== "(");
//     }
//     // console.log(stack);
//   }
//   console.log(stack);

//   return answer;
// };

const solution = (str) => {
  let answer = "";
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") stack.push(str[i]);
    else if (str[i] === ")") stack.pop();
    else if (stack.length === 0) answer += str[i];
  }

  return answer;
};

const str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
