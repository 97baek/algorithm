function solution(arr1, arr2) {
  let answer = [];

  answer = arr1.map((v, i) => {
    if (v > arr2[i]) return "A";
    else if (v < arr2[i]) return "B";
    else return "D";
  });

  return answer;
}

const a = [2, 1, 3, 1, 3];
const b = [1, 3, 2, 2, 3];

console.log(solution(a, b));
