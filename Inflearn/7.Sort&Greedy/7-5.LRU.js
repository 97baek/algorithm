const solution = (arr, n) => {
  let cache = Array(n).fill(0);

  for (let i = 0; i < arr.length; i++) {
    // Cache Miss
    if (!cache.includes(arr[i])) {
      for (let j = cache.length - 1; j > 0; j--) {
        cache[j] = cache[j - 1];
      }
      // Cache Hit
    } else {
      const index = cache.indexOf(arr[i]);
      for (let i = index; i > 0; i--) {
        cache[i] = cache[i - 1];
      }
    }
    cache[0] = arr[i];
    console.log(cache);
  }
  console.log(cache);
};

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(arr, 5));

// const solution = (arr, n) => {
//   let cache = Array(n).fill(0);

//   for (let i = 0; i < arr.length; i++) {
//     if (!cache.includes(arr[i])) {
//       cache.unshift(arr[i]);
//       if (cache.length > n) cache.pop();
//     } else {
//       cache.unshift(...cache.splice(cache.indexOf(arr[i]), 1));
//     }
//     console.log(cache);
//   }
//   return cache;
// };
