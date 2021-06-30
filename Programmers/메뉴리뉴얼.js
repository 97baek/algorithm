const solution = (orders, course) => {
  const answer = [];

  let hash = new Map();
  let temp = "";

  const DFS = (L, s, m, arr) => {
    if (L === m) {
      const v = temp.split("").sort().join("");
      if (!hash.has(v)) hash.set(v, 1);
      else hash.set(v, hash.get(v) + 1);
    } else {
      for (let i = s; i < arr.length; i++) {
        temp += arr[i];
        DFS(L + 1, i + 1, m, arr);
        temp = temp.substring(0, temp.length - 1);
      }
    }
  };

  for (let i = 0; i < orders.length; i++) {
    for (let j = 0; j < course.length; j++) {
      DFS(0, 0, course[j], orders[i]);
    }
  }

  for (let i = 0; i < course.length; i++) {
    let max = 0;
    let res = [];
    for (let [key, value] of hash) {
      if (hash.get(key) < 2) continue;
      if (key.length !== course[i]) continue;
      if (hash.get(key) > max) {
        res = [key];
        max = hash.get(key);
      } else if (hash.get(key) === max) {
        res.push(key);
      }
    }
    answer.push(res);
  }

  return answer.flat().sort();
};

// 조합 구해서 해시
