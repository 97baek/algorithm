const solution = (str) => {
  let string1 = str.toLowerCase().split("");
  let string2 = str.toLowerCase().split("").reverse();

  if (makeStr(string1) !== makeStr(string2)) return "NO";
  else return "YES";

  return "YES";
};

const makeStr = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= "a" && arr[i] <= "z") {
      str += arr[i];
    }
  }

  return str;
};

const str = "found7, time: study; Yduts; emit, 7Dnuof";
// const str = "found7,time:study;Yduts;emit,7Dnuof";
console.log(solution(str));

// function solution(s) {
//   let answer = "YES";
//   s = s.toLowerCase().replace(/[^a-z]/g, "");
//   if (s.split("").reverse().join("") !== s) return "NO";
//   return answer;
// }

// let str = "found7, time: study; Yduts; emit, 7Dnuof";
// console.log(solution(str));
