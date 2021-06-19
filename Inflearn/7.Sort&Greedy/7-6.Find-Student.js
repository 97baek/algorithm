// const solution = (arr) => {
//   let answer = [];
//   let idx = 0;
//   console.log(arr.length);

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       answer.push(i + 1);
//       idx = i;
//       break;
//     }
//   }

//   console.log(answer);

//   for (let i = idx; i < arr.length; i++) {
//     if (arr[idx] < arr[i]) {
//       answer.push(i);
//     }
//   }
//   return answer;
// };

const solution = (arr) => {
  const answer = [];
  let sortedArr = [...arr].sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortedArr[i]) answer.push(i + 1);
  }

  return answer;
};

const students = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(students));
