/*
input
[1, 2, 3, 4, 5]
output
[1]

input
[1, 3, 2, 4, 2]
output
[1, 2, 3]

*/

const solution = (answers) => {
  const answer = [];
  const ans1 = [1, 2, 3, 4, 5];
  const ans2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const ans3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let score1 = 0;
  let score2 = 0;
  let score3 = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === ans1[i % ans1.length]) score1++;
    if (answers[i] === ans2[i % ans2.length]) score2++;
    if (answers[i] === ans3[i % ans3.length]) score3++;
  }

  const max = Math.max(score1, score2, score3);

  if (score1 === max) answer.push(1);
  if (score2 === max) answer.push(2);
  if (score3 === max) answer.push(3);

  return answer;
};
