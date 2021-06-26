const solution = (s, target) => {
  let curr = s;
  let answer = 0;
  let ch = Array(10001).fill(0);
  let dis = Array(10001).fill(0);
  let L = 0;
  const queue = [s];

  ch[s] = 1;

  while (queue) {
    let n = queue.length;
    for (let i = 0; i < n; i++) {
      let x = queue.shift();
      for (let d of [x + 1, x - 1, x + 5]) {
        if (d === target) return L + 1;
        if (ch[d] === 0) {
          queue.push(d);
          ch[d] = 1;
        }
        console.log(queue);
      }
    }

    L++;
  }

  return answer;
};

console.log(solution(5, 14));
