// function solution(arr1) {
//   const arr2 = [...arr1];
//   const answer = [];
//   arr2.sort((a, b) => b - a);
//   console.log(arr1, arr2);
//   for (let i = 0; i < arr1.length; i++) {
//     answer.push(arr2.indexOf(arr1[i]) + 1);
//   }

//   return answer;
// }

// numbers = [87, 89, 92, 92, 92, 100, 76];
// console.log(solution(numbers));

function solution(arr1) {
  const answer = [];
  const arr2 = [...arr1].fill(1);
  // const arr2 = Array.from({ length: arr1.length }, () => 1);
  console.log(arr1, arr2);

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] < arr1[j]) {
        arr2[i]++;
      }
    }
  }

  return arr2;
}

numbers = [87, 89, 92, 100, 76];
console.log(solution(numbers));
