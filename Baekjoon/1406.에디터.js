let str = "abcd".split("");
const commands = ["L", "L", "L", "L", "D", "D", "L", "P x", "L", "B", "P y"];
// const commands = ["P x", "L", "P y"];
// const commands = ["B", "B", "P x", "L", "B", "B", "B", "P y", "D", "D", "P z"];

// let curr = str.length;
// let leftStack = str.slice();
// let rightStack = [];

const solution = (str, command) => {
  if (command === "L") {
    if (curr > 0) curr--;
  } else if (command === "D") {
    if (curr <= str.length) curr++;
  } else if (command === "B") {
    if (curr > 0) {
      str.splice(curr - 1, 1);
      curr--;
    }
  } else if (command.split(" ")[0] === "P") {
    const wordToAdd = command.split(" ")[1];
    str.splice(curr, 0, wordToAdd);
    curr++;
  }
  console.log(str, curr);
  return str;
};

// const solution = (str, command, n) => {
//   if (command === "L") {
//     if (leftStack.length > 0) {
//       rightStack.push(leftStack.pop());
//     } else {
//       return str;
//     }
//   } else if (command === "D") {
//     if (rightStack.length > 0) {
//       leftStack.push(rightStack.pop());
//     } else {
//       return str;
//     }
//   } else if (command === "B") {
//     if (leftStack.length > 0) {
//       leftStack.pop();
//     }
//   } else if (command.split(" ")[0] === "P") {
//     leftStack.push(command.split(" ")[1]);
//   }
//   console.log(n, "끝", leftStack, rightStack);
//   return [...leftStack, ...rightStack];
// };

for (let i = 0; i < commands.length; i++) {
  solution(str, commands[i], i);
}

console.log(str.join(""));
// console.log([...leftStack, ...rightStack.reverse()].join(""));
