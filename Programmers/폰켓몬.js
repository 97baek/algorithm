/*
input
[3, 1, 2, 3], 2
output
2

input
[3, 3, 3, 2, 2, 4], 3
output
3

input
[3, 3, 3, 2, 2, 2], 2
output
2

*/

const solution = (nums) => {
  const answer = [];
  const numsSet = [...new Set(nums)];
  const max = nums.length / 2;

  for (let i = 0; i < numsSet.length; i++) {
    answer.push(numsSet[i]);
    if (answer.length === max) return answer.length;
  }

  return answer.length;
};
