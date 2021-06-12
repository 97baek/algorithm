const solution = (arr, limit) => {
  let answer = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] <= limit) {
          answer = Math.max(answer, arr[i] + arr[j] + arr[k]);
        }
      }
    }
  }

  return answer;
};

console.log(solution([5, 6, 7, 8, 9], 21));
