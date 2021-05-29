function solution(a, k) {
  const answer = [...a];

  if (a.length === 0) {
    return [];
  }

  for (let i = 0; i < k; i++) {
    const poped = answer[answer.length - 1];
    answer.pop();
    answer.unshift(poped);
  }

  return answer;
}
