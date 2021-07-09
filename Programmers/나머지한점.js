/*
input
[[1, 4], [3, 4], [3, 10]]	
output
[1, 10]

input
[[1, 1], [2, 2], [1, 2]]	
output
[2, 1]
*/

const solution = (v) => {
  let answer = [0, 0];

  for (let i = 0; i < v.length; i++) {
    answer[0] ^= v[i][0];
    answer[1] ^= v[i][1];
  }

  return answer;
};
