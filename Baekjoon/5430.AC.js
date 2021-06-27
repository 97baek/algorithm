const [n, ...A] = require("fs").readFileSync("./test.txt").toString().trim().split(/\s/);
const arr = [];

for (let s = 0, l = 3; l <= A.length; s += 3, l += 3) {
  arr.push(A.slice(s, l));
}
// console.log(arr);
for (let i = 0; i < arr.length; i++) {
  let [command, l, numbers] = arr[i];
  numbers = JSON.parse(numbers);
  const answer = [];
  let flag = 0;
  let isHead = true;
  let head = 0;
  let tail = numbers.length - 1;
  // console.log(numbers);

  for (let i = 0; i < command.length; i++) {
    if (command[i] === "R") {
      isHead = !isHead;
    } else {
      if (head <= tail && isHead) head++;
      else if (head <= tail && !isHead) tail--;
      else {
        console.log("error");
        flag = 1;
        break;
      }
    }
  }

  if (flag === 0) {
    for (let i = head; i <= tail; i++) {
      answer.push(numbers[i]);
    }
  }

  if (flag === 0) console.log(`[${isHead ? answer.join(",") : answer.reverse().join(",")}]`);
}

// const [n, ...A] = require("fs").readFileSync("./test.txt").toString().trim().split(/\s/);
// const arr = [];

// for (let s = 0, l = 3; l <= A.length; s += 3, l += 3) {
//   arr.push(A.slice(s, l));
// }

// for (let i = 0; i < arr.length; i++) {
//   let [command, l, numbers] = arr[i];
//   let flag = 0;
//   numbers = JSON.parse(numbers);
//   let count = 0;

//   for (let j = 0; j < command.length; j++) {
//     if (command[j] === "R") {
//       count++;
//     } else {
//       if (numbers.length > 0) {
//         count % 2 === 1 ? numbers.pop() : numbers.shift();
//       } else {
//         console.log("error");
//         flag = 1;
//         break;
//       }
//     }
//   }

//   if (flag === 0)
//     console.log(`[${count % 2 === 0 ? numbers.join(",") : numbers.reverse().join(",")}]`);
// }
