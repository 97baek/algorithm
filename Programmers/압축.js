function solution(msg) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const answer = [];

  let curr = 0;
  let count = 0;
  while (true) {
    if (curr >= msg.length) break;
    if (curr === msg.length - 1) {
      answer.push(alphabet.indexOf(msg[curr]) + 1);
      break;
    }
    let temp = msg[curr];
    for (let i = curr + 1; i <= msg.length; i++) {
      let next = msg[i];

      if (alphabet.includes(temp + next)) {
        temp += next;
        curr++;
      } else {
        alphabet.push(temp + next);
        answer.push(alphabet.indexOf(temp) + 1);
        curr++;
        break;
      }
    }
    count++;
  }

  return answer;
}

console.log(solution("TOBEORNOTTOBEORTOBEORNOT"));
