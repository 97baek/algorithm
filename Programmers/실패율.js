const solution = (n, stages) => {
  const answer = [];
  let failPer = [];
  stages.sort((a, b) => b - a);
  let curr = 1;
  console.log(stages);

  while (n > failPer.length) {
    let count = 0;
    const len = stages.length;

    if (stages.length === 0) {
      failPer.push(0);
      curr++;
      continue;
    }

    while (stages[stages.length - 1] === curr) {
      stages.pop();
      count++;
    }
    failPer.push(count / len);
    curr++;
  }
  console.log(curr, failPer, stages);

  while (answer.length < n) {
    let max = Math.max(...failPer);
    if (failPer.includes(max)) {
      answer.push(failPer.indexOf(max) + 1);
      failPer[failPer.indexOf(max)] = -1;
    }
  }
  return answer;
};
console.log(solution(5, [1, 2, 2, 1, 3]));

// function solution(N, stages) {
//   const answer = []
//   const temp = new Array(N + 1).fill(0);
//   let remaining = stages.length;

//   stages.forEach( n => temp[n - 1] += 1);
//   // console.log(temp) // 현재 스테이지에 있는 인원
//   // n = 스테이지에 있는 인원, i + 1 스테이지
//   temp.forEach((n, i) => {
//       if(i < N) {
//           answer.push([i + 1, n / remaining]);
//           remaining -= n;
//       }
//   })
//   console.log(answer)
//   return answer.sort((a,b) => b[1] - a[1]).map(n => n[0]);
// }
