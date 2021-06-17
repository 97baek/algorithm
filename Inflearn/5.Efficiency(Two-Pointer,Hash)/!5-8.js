const solution = (str1, str2) => {
  let answer = 0;
  let curr = "";
  for (let i = 0; i < str2.length; i++) {
    curr += str1[i];
  }

  // for(let i=str2.length;i<str1.length-str2.length;i++){

  // }

  return answer;
};

const str1 = "bacaAacba";
const str2 = "abc";

console.log(solution(str1, str2));
