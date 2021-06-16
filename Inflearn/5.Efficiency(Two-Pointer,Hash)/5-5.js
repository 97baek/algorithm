const solution = (arr, n) => {
  let answer = 0;
  const sales = [];
  let p = 0;
  let sum = 0;
  let max = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }

  max = sum;

  for (let i = n; i < arr.length; i++) {
    sum = sum + arr[i] - arr[i - n];
    max = Math.max(sum, max);
    // console.log(i, max, sum);
  }
  console.log(sales);

  return max;
};

const arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(arr, 3));
