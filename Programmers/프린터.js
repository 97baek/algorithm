/*
input
[2, 1, 3, 2], 2
output
1

input
[1, 1, 9, 1, 1, 1], 0
output
5

*/

const solution = (priorities, location) => {
  priorities = priorities.map((priority, i) => [priority, i]);
  let count = 0;
  let max = getMax(priorities);
  for (let i = 0; i < priorities.length; i++) {
    max = Math.max(priorities[i][0], max);
  }
  while (priorities.length) {
    if (priorities[0][0] === max) {
      if (priorities[0][1] === location) return count + 1;
      priorities.shift();
      count++;
      max = getMax(priorities);
    } else {
      priorities.push(priorities.shift());
    }
  }
};

const getMax = (numbers) => {
  let max = 0;
  for (let i = 0; i < numbers.length; i++) {
    max = Math.max(numbers[i][0], max);
  }
  return max;
};
