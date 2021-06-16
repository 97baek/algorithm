// const solution = (arr1, arr2) => {
//   const answer = arr1
//     .filter((n, i) => {
//       if (arr2.includes(n)) {
//         return n;
//       }
//     })
//     .sort((a, b) => a - b);

//   return answer;
// };

// const solution = (arr1, arr2) => {
//   const n = arr1.length;
//   const m = arr2.length;
//   let answer = [];
//   let p1 = 0;
//   let p2 = 0;
//   let count = 0;

//   arr1.sort((a, b) => a - b);
//   arr2.sort((a, b) => a - b);
//   console.log(arr1);
//   console.log(arr2);

//   while (p1 < n && p2 < m) {
//     let min = Math.min(arr1[p1], arr2[p2]);

//     if (arr1[p1] !== arr2[p2]) {
//       if (arr1[p1] === min) p1++;
//       else if (arr2[p2] === min) p2++;
//     } else {
//       answer.push(min);
//       p1++;
//       p2++;
//     }
//     console.log(min);
//     count++;
//   }

//   return answer;
// };

const solution = (arr1, arr2) => {
  const answer = [];
  let p1 = 0;
  let p2 = 0;

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    } else if (arr1[p1] > arr2[p2]) {
      p2++;
    } else {
      p1++;
    }
  }

  return answer;
};

const arr1 = [1, 3, 9, 5, 2, 8, 7];
const arr2 = [3, 2, 5, 7, 8];
console.log(solution(arr1, arr2));
