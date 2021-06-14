const solution = (clothes) => {
  let answer = 1;
  const n = clothes.length;
  const map = new Map();

  for (let i = 0; i < n; i++) {
    if (map.has(clothes[i][1])) {
      map.set(clothes[i][1], map.get(clothes[i][1]) + 1);
    } else {
      map.set(clothes[i][1], 1);
    }
  }

  if (map.size === 1) return n;

  for (let [key, value] of map) {
    answer *= value + 1;
  }

  return answer - 1;
};
console.log(
  solution([
    ["yellowhat", "headgear"],
    ["bluesunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
