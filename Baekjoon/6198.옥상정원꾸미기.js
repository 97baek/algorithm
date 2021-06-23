let arr = [1, 10, 3, 7, 4, 12, 2];
let stack = [arr[0]];
let max = arr[0];
let answer = 0;

// for (let i = 1; i < arr.length; i++) {
//   console.log(stack, answer);
//   if (max > arr[i]) {
//     if (stack[stack.length - 1] === arr[i]) {
//       continue;
//     } else if (stack[stack.length - 1] > arr[i]) {
//       stack.push(arr[i]);
//       answer += stack.length - 1;
//     } else {
//       if (stack.length > 0) {
//         stack.pop();
//         stack.push(arr[i]);
//         answer++;
//       }
//     }
//   } else {
//     stack = [arr[i]];
//     max = arr[i];
//   }
// }

for (let i = 1; i < arr.length; i++) {
  while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) stack.pop();
  stack.push(arr[i]);
  answer += stack.length - 1;
}

console.log(answer);
