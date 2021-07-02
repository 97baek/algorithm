/**
input
str1: "FRANCE"
str2: "french"
output
16384

input
str1: "handshake"	
str2: "shake hands"
output
65536

input
str1: "aa1+aa2"
str2: "AAAA12"
output
43690

input
str1: "E=M*C^2"
str2: "e=m*c^2"
output
65536
*/

const solution = (str1, str2) => {
  let arr1 = makeBrokenString(str1);
  let arr2 = makeBrokenString(str2);
  let union = 0;
  const intersection = [];

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      const idx = arr1.indexOf(arr2[i]);
      intersection.push(arr2[i]);
      arr2[i] = "";
      arr1[idx] = "";
    }
  }

  arr2 = arr2.filter((str) => str !== "");
  union = arr1.length + arr2.length;

  return union === 0 && intersection.length === 0
    ? 65536
    : Math.floor((intersection.length / union) * 65536);
};

const makeBrokenString = (str) => {
  const arr = [];

  for (let i = 0; i < str.length - 1; i++) {
    const currChar = str[i].toLowerCase();
    const nextChar = str[i + 1].toLowerCase();
    if (currChar < "a" || currChar > "z") continue;
    if (nextChar < "a" || nextChar > "z") continue;
    arr.push(currChar + nextChar);
  }

  return arr;
};
