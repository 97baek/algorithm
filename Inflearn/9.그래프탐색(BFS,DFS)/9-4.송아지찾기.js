const solution = (n, m) => {
  const dist = Array(10001).fill(0);
  const queue = [[0, n]];
  let answer = 0;
  let dx = [-1, 1, 5];

  while (queue.length) {
    const [count, x] = queue.shift();
    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];

      if (dist[nx] === 0) {
        queue.push([count + 1, nx]);
        dist[nx] = 1;
      }
    }
    if (queue[0][1] === m) {
      answer = queue[0][0];
      console.log(queue);
      break;
    }
  }
  return answer;
};
console.log(solution(5, 14));

// const solution = (s, target) => {
//   let curr = s;
//   let answer = 0;
//   let ch = Array(10001).fill(0);
//   let dis = Array(10001).fill(0);
//   let L = 0;
//   const queue = [s];

//   ch[s] = 1;

//   while (queue) {
//     let n = queue.length;
//     for (let i = 0; i < n; i++) {
//       let x = queue.shift();
//       for (let d of [x + 1, x - 1, x + 5]) {
//         if (d === target) return L + 1;
//         if (ch[d] === 0) {
//           queue.push(d);
//           ch[d] = 1;
//         }
//         console.log(queue);
//       }
//     }

//     L++;
//   }

//   return answer;
// };

// console.log(solution(5, 14));
