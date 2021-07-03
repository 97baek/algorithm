/*
input
[70, 50, 80, 50], 100
output
3

input
[70, 80, 50], 100
output
3
*/

const solution = (people, limit) => {
  let answer = 0;
  let left = 0;
  let right = people.length - 1;
  people.sort((a, b) => b - a);
  // console.log(people);
  while (left <= right) {
    let sum = people[left] + people[right];
    if (sum > limit) {
      left++;
    } else {
      right--;
      left++;
    }
    answer++;
  }

  return answer;
};
