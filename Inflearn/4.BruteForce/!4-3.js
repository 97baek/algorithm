const solution = (arr) => {
  let answer = [];
  const students = arr[0].length;
  const tests = arr.length;
  let temp = [...arr[0]];
  // console.log(temp);

  for (let i = 1; i < students + 1; i++) {
    let list = [];
    for (let j = 0; j < tests; j++) {
      if (arr[j][tests] === i) {
        // console.log("탈출", i, j);
        break;
      }
      for (let k = 0; k < students; k++) {
        if (arr[j][k] !== i) {
          console.log(i, j, k, arr[j][k]);
          list.splice(k + 1);
        }
      }
    }
    console.log(list);
  }

  return answer;
};

const arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));

/**
 *
 * 내가 아니면 pop
 * list에 pop한거 넣기
 *
 * 1
 * list=[2,1,4]
 *
 * 2
 * list=[2,1]
 *
 * 3
 * list=[2,4,1]
 *
 * 1일 때 => test1(3,4,1,2), test2, test3
 * 2일 때 => test1(3,4,1,2), test2()
 * 한번도 앞에 없으면? 경우의 수에 추가
 *
 * 기준 1
 * 첫번째 => 2
 * 두번째 => 탈출
 *
 * 기준 2
 * 첫번째 시험에서 2보다 앞서있는 것 => 3,4,1 제외
 * 끝
 *
 * 기준 3
 * 첫번째 => X
 * 두번째 => 4
 * 세번째 => X
 * 3,1과 3,2 리턴
 *
 *
 * 기준 4
 * 첫번째 => 3
 * 두번째 => X
 * 세번째 => 1
 *
 * 4,2 리턴
 *
 */
