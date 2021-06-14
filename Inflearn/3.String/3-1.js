const solution = (str) => {
  let string1 = str.toLowerCase().split("");
  let string2 = str.toLowerCase().split("").reverse();

  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - i - 1]) return "NO";
  }

  return "YES";
};

const str = "goog";
console.log(solution(str));
