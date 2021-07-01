/**
input
[3, 0, 6, 1, 5]	
output
3 
*/

const solution = (citations) => {
  let answer = 0;

  citations.sort((a, b) => b - a);

  while (answer + 1 <= citations[answer]) {
    console.log(answer, citations[answer]);
    answer++;
  }

  return answer;
};
