/*
input
5, [2, 4], [1, 3, 5]
output
5

input
5, [2, 4], [3]
output
4

input
3, [3], [1]
output
2

*/

const solution = (n, lost, reserve) => {
  let _lost = lost.filter((s) => reserve.indexOf(s) === -1);
  let _reserve = reserve.filter((s) => lost.indexOf(s) === -1);

  let answer = n - _lost.length;
  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (_lost[i] - _reserve[j] === 1 || _lost[i] - _reserve[j] === -1) {
        let index = _reserve.indexOf(_reserve[j]);
        answer++;
        _reserve.splice(index, 1);
        break;
      }
    }
  }

  return answer;
};
