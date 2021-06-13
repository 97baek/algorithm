// const solution = (str) => {
//   const arr = str.split("");
//   let answer = [];
//   let curr = 0;
//   for (let i = 0; i < arr.length; i++) {
//     console.log(i, arr[i], curr, answer.length);
//     if (arr[i] === "<") {
//       if (curr > 0) {
//         curr--;
//       } else {
//         continue;
//       }
//     } else if (arr[i] === ">") {
//       if (curr < answer.length) curr++;
//     } else if (arr[i] === "-") {
//       answer.splice(curr - 1, 1);
//       curr--;
//     } else {
//       if (curr === answer.length) {
//         answer.push(arr[i]);
//       } else {
//         answer.splice(curr, 0, arr[i]);
//       }
//       curr++;
//     }
//     console.log(i, answer);
//   }

//   return answer.join("");
// };

const solution = (str) => {
  const left = [];
  const right = [];

  for (let s of str) {
    if (s === "-") {
      if (left) {
        left.pop();
      }
    } else if (s === "<") {
      if (left) {
        right.push(left.pop());
      }
    } else if (s === ">") {
      if (right) {
        left.push(right.pop());
      }
    } else {
      left.push(s);
    }
  }

  return [...left, ...right.reverse()].join("");
};

console.log(solution("abc<<d>e<<f>>--"));
