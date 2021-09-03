const solution = (price, money, count) => {
  let answer = 0;
  let sum = 0;

  for (let i = 0; i < count; i++) {
    sum += price * (i + 1);
  }

  answer = sum - money;

  return answer > 0 ? answer : 0;
};
