/*
input
"one4seveneight"
output
1478

input
"23four5six7"
output
234567

input
"2three45sixseven"
output
234567

input
"123"
output
123

*/

const solution = (s) => {
  let answer = "";
  const wordToNumber = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  let count = 10;
  for (let i = 0; i < s.length; i++) {
    let temp = "";
    let curr = i + 1;
    // console.log(temp);
    for (let j = i; j < s.length; j++) {
      if (isNumber(s[j])) break;
      if (wordToNumber[temp]) break;
      temp += s[j];
    }
    if (isNumber(s[i])) {
      answer += s[i];
      continue;
    }
    if (temp.length > 2) {
      answer += wordToNumber[temp];
      i += temp.length - 1;
    }
  }

  return +answer;
};

const isNumber = (n) => {
  return n >= "0" && n <= "9";
};
