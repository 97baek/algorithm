const solution = (arr, n) => {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] > n) {
      right = mid - 1;
    } else if (arr[mid] < n) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
};

console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32));
