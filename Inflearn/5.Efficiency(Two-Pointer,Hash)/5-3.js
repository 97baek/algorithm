// const solution = (n, arr) => {
//   let answer = 0;

//   let lt = 0;
//   let rt = 0;
//   let sum = arr[lt];

//   while (rt < arr.length) {
//     // console.log(lt, rt, sum);
//     if (sum === n) {
//       // console.log(lt, rt);
//       answer++;
//       lt++;
//       sum = arr[lt];
//       rt = lt;
//     } else if (sum < n) {
//       rt++;
//       sum += arr[rt];
//     } else {
//       lt++;
//       rt = lt;
//       sum = arr[lt];
//     }
//   }

//   return answer;
// };

// console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));

const solution = (n, arr) => {
  let answer = 0;

  let lt = 0;
  let rt = 0;
  let sum = arr[lt];

  while (rt < arr.length) {
    console.log(lt, rt, sum);
    if (sum === n) {
      answer++;
      sum -= arr[lt];
      lt++;
    } else if (sum < n) {
      rt++;
      sum += arr[rt];
    } else {
      sum -= arr[lt];
      lt++;
    }
  }

  return answer;
};

console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));
