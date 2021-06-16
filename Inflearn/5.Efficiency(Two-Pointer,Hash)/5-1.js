// const solution = (arr1, arr2) => {
//   return [...arr1, ...arr2].sort((a, b) => a - b);
// };

const solution = (arr1, arr2) => {
  let p1 = 0;
  let p2 = 0;
  let count = 0;
  let answer = [];

  while (answer.length !== arr1.length + arr2.length) {
    let min = Math.min(arr1[p1], arr2[p2]);

    if (min === arr1[p1]) {
      answer.push(min);
      p1++;
    } else if (min === arr2[p2]) {
      answer.push(min);
      p2++;
    }

    console.log(p1, p2);

    if (p1 === arr1.length) {
      answer.push(arr2[p2++]);
    } else if (p2 === arr2.length) {
      answer.push(arr1[p1++]);
    }
    count++;
  }

  return answer;
};

const arr1 = [1, 3, 5];
const arr2 = [2, 3, 6, 7, 9];
console.log(solution(arr1, arr2));
