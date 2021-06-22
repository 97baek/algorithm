// const arr = Array.from({ length: 7 }, (v, i) => i + 1);
// let answer = [];
// const solution = (n, k) => {
//   let curr = 0;

//   while (answer.length !== n) {
//     curr = (curr + k - 1) % arr.length;
//     console.log(curr, arr[curr]);
//     answer.push(...arr.splice(curr, 1));
//   }

//   return answer;
// };
// solution(7, 3);
// answer = answer.join(", ");
// let answer1 = "<";
// answer += ">";
// console.log("<" + answer);

let n = 7;
let k = 3;

const remain = Array.from({ length: n }, (v, i) => i + 1);
let answer = [];
let curr = 0;
while (answer.length !== n) {
  curr = (curr + (k - 1)) % remain.length;
  answer.push(remain.splice(curr, 1));
}

console.log("<" + answer.join(", ") + ">");
