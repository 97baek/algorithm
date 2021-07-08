/*
input
[44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]
output
[3, 5]

input
[0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]	
output
[1, 6]

input
[45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]	
output
[1, 1]
*/

const solution = (lottos, win_nums) => {
  const answer = [];
  let correct = 0;
  let unknown = 0;

  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) unknown++;
    else if (win_nums.includes(lottos[i])) correct++;
  }

  if (correct === 0 && unknown === 0) {
    return [6, 6];
  }
  // console.log(unknown, correct)
  const highest = correct + unknown;
  const lowest = correct < 2 ? 1 : correct;

  answer.push(7 - highest, 7 - lowest);
  return answer;
};
