function solution(arr) {
  let answer = 0;
  let map = new Map();

  for (let x of arr) {
    if (map.has(x)) map.set(x, map.get(x) + 1);
    else map.set(x, 1);
  }

  for (let [key, value] of map) {
    if (value % 2 === 1) answer = key;
  }

  return answer;
}
