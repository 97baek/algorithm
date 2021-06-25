const solution = (n) => {
  let answer = [];
  let check = Array.from({ length: n + 1 }, () => 0);
  const DFS = (v) => {
    if (v === n + 1) {
      let tmp = [];
      for (let i = 0; i <= n; i++) {
        if (check[i] === 1) tmp.push(i);
      }
      if (tmp.length > 0) answer.push(tmp);
    } else {
      check[v] = 1;
      DFS(v + 1);
      check[v] = 0;
      DFS(v + 1);
    }
  };
  DFS(1);

  return answer;
};

solution(3);

console.log(solution(3));
