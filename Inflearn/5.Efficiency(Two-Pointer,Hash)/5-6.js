// const solution = (students) => {
//   let answer = "";
//   let obj = {};
//   for (let i = 0; i < str.length; i++) {
//     if (!obj[str[i]]) {
//       obj[str[i]] = 1;
//     } else {
//       obj[str[i]]++;
//     }
//   }

//   console.log(Object.entries(obj));

//   let max = 0;
//   for (let [key, value] of Object.entries(obj)) {
//     console.log(value);
//     if (value > max) {
//       max = value;
//       answer = key;
//     }
//   }

//   return answer;
// };

const solution = (str) => {
  let answer = "";
  let map = new Map();

  for (let v of str) {
    if (map.has(v)) {
      map.set(v, map.get(v) + 1);
    } else {
      map.set(v, 1);
    }
  }

  console.log(map);

  return answer;
};
const str = "BACBACCACCBDEDE";
console.log(solution(str));
