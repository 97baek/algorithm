const solution = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let temp = 0;
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
      console.log(i, j, arr);
    }
  }
  return arr;
};

const arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
