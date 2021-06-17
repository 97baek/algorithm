const solution = (n, arr) => {
  let answer = 0;
  let p1 = 0;
  let p2 = 0;
  let sum = 0;
  let count = 0;

  while (count < 30) {
    if (sum < n) {
      sum += arr[p2++];
    } else if (sum > n) {
      sum = 0;
      sum += arr[p1++];
      p2 = p1 + 1;
    } else {
      answer++;
      sum = 0;
    }

    count++;
  }

  return answer;
};

const a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));

/**
 * p2++하면서 sum을 만듦
 * sum이 n보다 크면(부분순열이 아니면)
 * p1++
 * p2=p1+1
 */

//  const solution = (n, arr) => {
//   let answer = [];
//   let p1 = 0;
//   let p2 = 1;
//   // let sum = 0;
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let sum = arr[i];
//     let list = [arr[i]];
//     for (let j = i + 1; j < arr.length; j++) {
//       sum += arr[j]; // 6
//       list.push(arr[j]); // 2,1,3
//       if (sum === n) {
//         answer.push(list);
//         break;
//       } else if (sum > n) {
//         break;
//       }
//     }
//   }

//   return answer.length;
// };
