const solution = (arr) => {
  let array = [...arr];
  let negs = [];
  let n = array.length;

  // for (let i = 0; i < n; i++) {
  //   // console.log(i, array[i]);
  //   if (arr[i] < 0) {
  //     negs.push(arr[i]);
  //     if (array.includes(arr[i])) {
  //       array.splice(i, 1);
  //       array.unshift(0);
  //       console.log(negs);
  //     }
  //   }
  // }
  // console.log(array);
  // console.log(negs);

  for (let i = 0; i < n; i++) {
    let idx = i;
    if (arr[i] > 0) {
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[idx]) idx = j;
      }
      [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
  }

  return array;
};

const arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
