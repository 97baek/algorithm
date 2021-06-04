const solution = (new_id) => {
  // 1단계
  let answer = new_id.toLowerCase().split("");

  // 2단계
  for (let i = 0; i < answer.length; i++) {
    // console.log(s);
    // if (!(s >= "a" && s <= "z" && s >= "0" && s <= "9" && s === "." && s === "-" && s === "_")) {
    // console.log(s);
    // }
    if (
      !(answer[i] >= "a" && answer[i] <= "z") &&
      !(answer[i] >= "0" && answer[i] <= "9") &&
      answer[i] !== "." &&
      answer[i] !== "-" &&
      answer[i] !== "_"
    ) {
      answer[i] = "";
    }
  }

  let n = answer.length;
  answer = answer.filter((v) => v !== "");

  // 3단계
  for (let i = 0; i < n; i++) {
    if (answer[i] === "." && answer[i + 1] === ".") answer[i] = "";
  }
  // 4단계 준비 (빈 문자인 원소 제거)
  answer = answer.filter((v) => v !== "");

  // 4단계
  if (answer[0] === ".") answer.shift();
  else if (answer[answer.length - 1] === ".") answer.pop();

  // 5단계
  if (answer.length === 0) answer.push("a");

  // 6단계
  if (answer.length >= 16) answer = answer.slice(0, 15);
  if (answer[answer.length - 1] === ".") answer.pop();

  // 7단계
  if (answer.length <= 2) {
    while (answer.length < 3) {
      answer.push(answer[answer.length - 1]);
    }
  }

  return answer.join("");
};

// console.log(solution("...!@Ba..T#*...........y.ab.123c.d.....3ef2gh1i123jklm...."));
console.log(solution(".....b...@.."));
