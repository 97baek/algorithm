/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const answer = [];
  const strings = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const _keys = Object.keys(strings);

  for (let i = 0; i < s.length; i++) {
    if (_keys.includes(s[i])) {
      answer.push(s[i]);
    } else {
      if (s[i] === strings[answer[answer.length - 1]]) {
        answer.pop();
      } else {
        return false;
      }
    }
  }

  return answer.length === 0;
};
