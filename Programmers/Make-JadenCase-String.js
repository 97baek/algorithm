const solution = (s) => {
  let words = s.split(" ");
  let jaden = [];
  words.map((word) => jaden.push(word.toLowerCase()));
  console.log(jaden);

  for (let i = 0; i < jaden.length; i++) {
    if (jaden[i] !== "") {
      jaden[i] = jaden[i].replace(jaden[i][0], jaden[i][0].toUpperCase());
    }
    // console.log(jaden[i]);
  }

  let answer = jaden.join(" ");
  console.log(answer);
};

let first = solution("3people unFollowed me");
let second = solution("for the last week");
let third = solution(" adgagd 3eagdag ");
