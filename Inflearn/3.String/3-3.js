const solution = (str) => {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") answer += str[i];
  }

  return +answer;
};

const str = "g0en2T0s8eSoft";
console.log(solution(str));
