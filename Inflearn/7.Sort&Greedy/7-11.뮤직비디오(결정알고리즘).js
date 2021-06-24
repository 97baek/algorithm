const solution = (arr, m) => {
  let left = Math.max(...arr);
  let right = arr.reduce((acc, curr) => (acc += curr), 0);
  let answer = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = 1;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      if (sum + arr[i] > mid) {
        count++;
        sum = arr[i];
      } else {
        sum += arr[i];
      }
    }
    if (count < m) {
      right = mid - 1;
    } else if (count > m) {
      left = mid + 1;
    } else {
      answer = mid;
      right = mid - 1;
    }
    console.log(count, mid);
  }
  return answer;
};

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
