const solution = (arr, m) => {
  let answer = 0;
  arr.sort();
  let lt = 1;
  let rt = arr[arr.length - 1];

  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    let c = count(arr, mid);
    if (c >= m) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
};

const count = (arr, m) => {
  let curr = arr[0];
  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (curr + m <= arr[i]) {
      curr = arr[i];
      count++;
    }
  }

  return count;
};

console.log(solution([1, 2, 8, 4, 9], 3));
