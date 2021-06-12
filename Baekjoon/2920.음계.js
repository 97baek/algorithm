const solution = (arr) => {
  const answer = "ascending";

  let isAsc = true;
  let isDesc = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) isDesc = false;
    else if (arr[i] > arr[i + 1]) isAsc = false;
    if (isDesc === false && isAsc === false) return "mixed";
  }

  if (isAsc) return "ascending";
  if (isDesc) return "descending";
  return "mixed";
};

const asc = [1, 2, 3, 4, 5, 6, 7, 8];
const desc = [8, 7, 6, 5, 4, 3, 2, 1];
const mix = [8, 1, 7, 2, 6, 3, 5, 4];

console.log(solution(mix));
