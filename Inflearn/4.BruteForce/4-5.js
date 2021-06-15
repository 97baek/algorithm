const solution = (arr, n) => {
  let answer = [];
  let temp = 0;
  let m = arr.length;

  for (let i = 0; i < m; i++) {
    for (let j = i + 1; j < m; j++) {
      for (let k = j + 1; k < m; k++) {
        let sum = arr[i] + arr[j] + arr[k];
        if (!answer.includes(sum)) answer.push(sum);
      }
    }
  }

  answer.sort((a, b) => b - a);

  return answer[n - 1];
};

const arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(arr, 3));
