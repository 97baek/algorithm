function solution(n) {
  let answer = 0;
  let count = 0;

  let binary = n.toString(2);
  console.log(binary);

  for (let i = 0; i < binary.length; i++) {
    console.log(binary);
    if (binary[i] === "1" && binary[i + 1] === "0") {
      count++;
    } else if (binary[i] === "0" && binary[i + 1] === "0") {
      count++;
    } else if (binary[i] === "0" && binary[i + 1] === "1") {
      if (answer <= count) {
        console.log(binary[i], i, count, answer);
        answer = count;
      }
      count = 0;
    }
    console.log(i, binary, binary[i], binary[i + 1], count);
  }
  return answer;
}
