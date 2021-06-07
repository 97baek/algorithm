// function solution(n, arr1, arr2) {
//   return arr1
//     .map((arr, i) => (arr | arr2[i]).toString(2))
//     .map(bin => {
//       if (bin.length < n) bin = '0'.repeat(n - bin.length) + bin
//       return bin.replace(/1|0/g, n => (parseInt(n) ? '#' : ' '))
//     })
// }
