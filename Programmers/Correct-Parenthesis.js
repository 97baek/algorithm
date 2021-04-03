const solution = (s) => {
  const strings = {
    "(": ")",
  };
  let array = [];
  //   console.log(s.length);
  for (let i = 0; i < s.length; i++) {
    console.log(array, i);
    if (s[i] === "(") {
      array.push(s[i]);
    } else {
      if (array[array.length - 1] === "(" && s[i] === ")") {
        array.pop();
      } else {
        return false;
      }
    }
    // console.log(array, s);
  }

  return array.length === 0;
};

let a = solution("()()");
let b = solution("(())()");
let c = solution(")()(");
let d = solution("(()(");

console.log(a, b, c, d);
