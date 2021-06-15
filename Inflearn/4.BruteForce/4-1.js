// const solution = (n, arr) => {
//   let nums = arr.sort((a, b) => b - a).map((v) => v + "");
//   let sums = [];
//   let max = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < nums[i].length; j++) {
//       sum += +nums[i][j];
//     }
//     sums.push(sum);
//   }
//   const maxIndex = sums.indexOf(Math.max.apply(null, sums));
//   console.log(maxIndex);

//   return nums[maxIndex];
// };

// const arr = [128, 460, 10603, 40, 521, 137, 123];
// console.log(solution(7, arr));

const solution = (n, arr) => {
  let answer = 0;
  let max = 0;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    let temp = arr[i];
    while (temp) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }
    // console.log(sum);
    if (max < sum) {
      max = sum;
      answer = arr[i];
    } else if (max === sum) {
      if (answer < arr[i]) answer = arr[i];
    }
  }

  return answer;
};

const arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
