/*
input
5	24
output
"TUE"
*/

const solution = (a, b) => {
  let answer = "";
  let sum = 0;

  const dayArray = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  for (let i = 0; i < a - 1; i++) {
    sum += days[i];
  }

  sum = sum + b - 1;

  answer = dayArray[sum % 7];

  return answer;
};
