/**
 * 열 최댓값
 * [0][0] ~ [0][5]
 * ...
 * [5][0] ~ [5][5]
 * [i][j]
 *
 * 행 최댓값
 * [0][0] ~ [4][0]
 * ...
 * [0][4] ~ [4][4]
 *
 *
 * 대각선 최댓값
 * [0][0] + [1][1] + ... [5][5]
 * [i][i]
 * [0][4] + [1][3] + [2][2] + [3][1] + [4][0]
 */

function solution(arr) {
  let max = 0;
  let sumRow = 0;
  let sumCol = 0;
  let sumDae1 = 0;
  let sumDae2 = 0;
  let temp = 0;

  for (let i = 0; i < arr.length; i++) {
    sumDae1 += arr[i][i];
    sumDae2 += arr[i][4 - i];
    for (let j = 0; j < arr.length; j++) {
      sumRow += arr[i][j];
      sumCol += arr[j][i];
      temp = Math.max(sumRow, sumCol, sumDae1, sumDae2);
      if (max < temp) {
        max = temp;
      }
    }
    console.log(temp, max);
    sumRow = 0;
    sumCol = 0;
    temp = 0;
  }

  return max;
}

const arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
