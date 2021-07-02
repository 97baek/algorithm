/**

input
[93, 30, 55], [1, 30, 5]
output
[2, 1]

input
[95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]
output
[1, 3, 2]

 */

const solution = (progresses, speeds) => {
  const answer = [];
  while (progresses.length) {
    let count = 0;

    for (let i = 0; i < progresses.length; i++) {
      if (progresses[i] < 100) progresses[i] += speeds[i];
    }

    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count++;
    }

    if (count > 0) answer.push(count);
  }

  return answer;
};
