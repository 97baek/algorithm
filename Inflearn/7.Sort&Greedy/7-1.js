const solution = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[idx] > arr[j]) idx = j;

      [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
  }
  return arr;
};

const array = [13, 5, 11, 7, 23, 15];
console.log(solution(array));
