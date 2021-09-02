const solution = (scores) => {
  const newScores = getNewScores(scores);
  let answer = "";

  for (let i = 0; i < newScores.length; i++) {
    const self = newScores[i][i];
    let max = Math.max(...newScores[i]);
    let min = Math.min(...newScores[i]);
    let n = newScores.length;

    if (isTargetNumber(self, newScores[i], max)) {
      newScores[i][i] = 0;
      n--;
    } else if (isTargetNumber(self, newScores[i], min)) {
      newScores[i][i] = 0;
      n--;
    }

    const average = newScores[i].reduce((acc, curr) => (acc += curr), 0) / n;

    answer += getGrade(average);
  }

  return answer;
};

const isTargetNumber = (self, currentNumber, target) => {
  return self === target && isUnique(currentNumber, target);
};

const isUnique = (numbers, target) => {
  let count = 0;
  for (const number of numbers) {
    if (number === target) count++;
    if (count > 1) return false;
  }
  return true;
};

const getNewScores = (scores) => {
  const newScores = [];

  for (let i = 0; i < scores.length; i++) {
    let temp = [];
    for (let j = 0; j < scores[i].length; j++) {
      temp.push(scores[j][i]);
    }
    newScores.push(temp);
  }

  return newScores;
};

const getGrade = (average) => {
  if (average >= 90) return "A";
  if (average >= 80) return "B";
  if (average >= 70) return "C";
  if (average >= 50) return "D";
  return "F";
};
