const solution = (arr1, arr2) => {
  const answer = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    console.log(p1, p2);
    if (arr1[p1] > arr2[p2]) {
      answer.push(arr2[p2++]);
    } else {
      answer.push(arr1[p1++]);
    }
  }

  while (p1 < arr1.length) {
    answer.push(arr1[p1++]);
  }
  while (p2 < arr2.length) {
    answer.push(arr2[p2++]);
  }

  return answer;
};

const arr1 = [1, 3, 5];
const arr2 = [2, 3, 6, 7, 9];
console.log(solution(arr1, arr2));
