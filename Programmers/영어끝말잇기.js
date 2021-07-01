/**
input
["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]
output
[3,3]

input
["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]
output
[0,0]

input
["hello", "one", "even", "never", "now", "world", "draw"]
output
[1,3]

*/

const solution = (n, words) => {
  let usedWords = [];
  let turn = 0;

  while (words.length > 0) {
    turn++;
    if (
      words[0] &&
      usedWords.length > 0 &&
      usedWords[usedWords.length - 1][usedWords[usedWords.length - 1].length - 1] !== words[0][0]
    ) {
      return [turn % n === 0 ? n : turn % n, Math.ceil(turn / n)];
    }
    if (usedWords.includes(words[0])) {
      return [turn % n === 0 ? n : turn % n, Math.ceil(turn / n)];
    }
    usedWords.push(words.shift());
    // console.log(usedWords, words, turn);
  }
  // console.log(usedWords[usedWords.length-1])
  return [0, 0];
};
