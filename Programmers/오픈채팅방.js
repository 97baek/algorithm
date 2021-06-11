const solution = (record) => {
  const data = record.map((v) => v.split(" "));
  let answer = [];
  let users = {};

  for (let i = 0; i < data.length; i++) {
    if (data[i][0] === "Change") {
      users[data[i][1]] = data[i][2];
    } else if (data[i][0] === "Enter") {
      users[data[i][1]] = data[i][2];
      answer.push(["Enter", data[i][1]]);
    } else if (data[i][0] === "Leave") {
      answer.push(["Leave", data[i][1]]);
    }
  }

  answer = answer.map((v) => {
    if (v[0] === "Enter") return `${users[v[1]]}님이 들어왔습니다.`;
    if (v[0] === "Leave") return `${users[v[1]]}님이 나갔습니다.`;
  });

  return answer;
};
