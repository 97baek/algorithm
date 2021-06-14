const solution = (str) => {
  let answer = str[0];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] !== str[i - 1]) {
      if (count > 1) {
        answer += count;
        count = 1;
      }
      answer += str[i];
    } else {
      count++;
    }
  }

  return answer;
};

const str = "KKHSSSSSSSE";
console.log(solution(str));

/**
 * str[i]가 str[i-1]과 다르다면
 * s에 str[i]를 더해줌
 * 같다면
 * count++
 * 다른 문자가 나오면
 * s+count
 *
 */
