const solution = (str, e) => {
  const answer = [];
  let pos = str.indexOf(e);
  console.log(pos);
  let min = str.length;
  let prevPos = pos;
  for (let i = 0; i < str.length; i++) {
    let pos = str.indexOf(e, i);
    if (pos !== str.indexOf(e, i - 1)) prevPos = str.indexOf(e, i - 1);

    min = Math.min(Math.abs(prevPos - i), Math.abs(pos - i));
    console.log(min, prevPos, pos, i);
    answer.push(min);
  }

  let a = 10;
  let b = 5;
  // console.log(Math.abs(b - a));

  return answer;
};

const str = "teachermode";
console.log(solution(str, "e"));
