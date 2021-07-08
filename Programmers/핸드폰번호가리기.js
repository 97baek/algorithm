/*
input
"01033334444"	
output
"*******4444"

input
"027778888"
output
"*****8888"
*/

const solution = (phone_number) => {
  let answer = [];
  let numberLength = phone_number.length;

  for (let i = 0; i < numberLength - 4; i++) {
    answer.push("*");
  }
  for (let i = numberLength - 4; i < numberLength; i++) {
    answer.push(phone_number[i]);
  }

  return answer.join("");
};
