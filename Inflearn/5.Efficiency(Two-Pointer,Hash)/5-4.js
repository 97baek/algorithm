const solution = (n, arr) => {
  let answer = 0;

  let lt = 0;
  let rt = 0;
  let sum = arr[lt];
  let temp = [arr[lt]];

  // while (rt < arr.length) {
  //   if (sum < n) {
  //     rt++;
  //     sum += arr[rt];
  //     answer++;
  //   } else if (sum === n) {
  //     lt++;
  //     rt = lt;
  //     sum = arr[lt];
  //     answer++;
  //   } else {
  //     lt++;
  //     rt = lt;
  //     sum = arr[lt];
  //   }
  // }

  while (rt < arr.length) {
    if (sum <= n) {
      console.log(lt, rt, sum);
      answer += rt - lt + 1;
      rt++;
      sum += arr[rt];
    } else {
      sum -= arr[lt];
      lt++;
    }
  }

  return answer;
};

console.log(solution(5, [1, 3, 1, 2, 3]));
