const lengthOfLongestSubstring = (s) => {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    let temp = [];
    for (let j = i; j < s.length; j++) {
      if (temp.includes(s[j]) === false) {
        temp.push(s[j]);
        answer = Math.max(temp.length, answer);
      } else {
        break;
      }
    }
  }

  return answer;
};
