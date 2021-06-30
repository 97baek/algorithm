function solution(expression) {
  const operator = [
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "*", "+"],
    ["*", "+", "-"],
    ["*", "-", "+"],
  ];
  let answer = 0;

  for (let i = 0; i < operator.length; i++) {
    let temp = expression.split(/(\D)/);
    for (let j = 0; j < operator[i].length; j++) {
      while (temp.includes(operator[i][j])) {
        const idx = temp.indexOf(operator[i][j]);
        temp.splice(idx - 1, 3, eval(temp.slice(idx - 1, idx + 2).join("")));
      }
    }
    answer = Math.max(answer, Math.abs(temp[0]));
  }

  return answer;
}
