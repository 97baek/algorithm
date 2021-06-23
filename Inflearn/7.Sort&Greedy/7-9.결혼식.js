const solution = (arr) => {
  const answer = [];
  let max = 0;
  let count = 0;
  arr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    answer.push([arr[i][0], "s"]);
    answer.push([arr[i][1], "e"]);
  }

  answer.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < answer.length; i++) {
    if (answer[i][1] === "s") count++;
    else if (answer[i][1] === "e") count--;
    max = Math.max(max, count);
    // console.log(count, max);
  }

  return max;
};

const arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 15],
];
console.log(solution(arr));
