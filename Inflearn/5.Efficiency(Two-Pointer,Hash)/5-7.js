const solution = (str1, str2) => {
  let map1 = new Map();
  let map2 = new Map();
  for (x of str1) {
    if (map1.has(x)) {
      map1.set(x, map1.get(x) + 1);
    } else {
      map1.set(x, 1);
    }
  }

  for (x of str2) {
    if (map2.has(x)) {
      map2.set(x, map2.get(x) + 1);
    } else {
      map2.set(x, 1);
    }
  }

  for (let [key, value] of map1) {
    // console.log(x);
    console.log(key, value);
    if (!map2.has(key)) {
      return false;
    }
    if (map2.has(key)) {
      // console.log(key, value, map2.get(key));
      if (map2.get(key) !== value) {
        return false;
      }
    }
  }
  return true;

  console.log(map1, map2);
};

const str1 = "AbaAeCex";
const str2 = "baeeACA";

console.log(solution(str1, str2));
