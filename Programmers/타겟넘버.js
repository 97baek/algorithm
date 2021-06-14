const solution = (numbers, target) => {
  let answer = 0;

  const DFS = (count, res) => {
    if (count === numbers.length) {
      if (res === target) {
        answer++;
      }
    } else {
      DFS(count + 1, res + numbers[count]);
      DFS(count + 1, res - numbers[count]);
    }
  };

  DFS(0, 0);

  return answer;
};

console.log(solution([1, 1, 1, 1, 1], 3));
