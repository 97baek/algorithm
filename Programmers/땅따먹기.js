// const solution = (land) => {
//   const n = land.length;
//   let answer = 0;
//   let ch = Array.from(Array(land.length), () => Array(4).fill(0));

//   // console.log(ch);

//   const DFS = (L, sum) => {
//     console.log("시작", L, sum);
//     if (L === n - 1) {
//       console.log("합", L, sum);
//       answer = Math.max(answer, sum);
//     } else {
//       for (let i = 0; i < 4; i++) {
//         if (ch[L][i] === 0) {
//           console.log(L, i);
//           ch[L + 1][i] = 1;
//           console.log(ch);
//           console.log(land[L][i]);
//           DFS(L + 1, sum + land[L][i]);
//           ch[L + 1][i] = 0;
//         }
//       }
//     }
//   };
//   for (let i = 0; i < land[0].length; i++) {
//     console.log(land[0][i]);
//     ch[0][i] = 1;
//     DFS(1, land[0][i]);
//     ch[0][i] = 0;
//   }

//   return answer;
// };

const solution = (land) => {
  let answer = Math.max(0);

  for (let i = 0; i < land.length; i++) {
    let max = Math.max(...land[i]);
    let index = land[i].indexOf(max);
    if (land[i + 1]) {
      land[i + 1].splice(index, 1);
    }
    console.log(land[i], land[i + 1], answer, max);
    answer += max;
  }

  return answer;
};

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
);
