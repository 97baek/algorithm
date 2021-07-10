/*
input
baekjoon

output
aekjoon
baekjoon
ekjoon
joon
kjoon
n
on
oon
*/

const input = require("fs").readFileSync("./test.txt").toString().trim();

const answer = [];

for (let i = 0; i < input.length; i++) {
  let temp = input[i];
  for (let j = i + 1; j < input.length; j++) {
    temp += input[j];
  }
  answer.push(temp);
}

answer.sort();

for (let word of answer) {
  console.log(word);
}
