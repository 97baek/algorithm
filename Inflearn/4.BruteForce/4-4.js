// const solution = (n, arr) => {
//   let answer = [];
//   let price = [...arr].sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
//   // let count = 0;
//   let max = 0;
//   let sum = 0;
//   let list = [];
//   console.log(price);

//   for (let i = 0; i < price.length; i++) {
//     let count = 0;
//     for (let j = i + 1; j < price.length; j++) {
//       if (sum + price[i][0] + price[i][1] <= n) {
//         sum += price[i][0] + price[i][1];
//         list.push(price[i]);
//         count++;
//         // console.log(count);
//       } else {
//         if (sum + price[i][0] / 2 + price[i][1]) {
//           sum += price[i][0] / 2 + price[i][1];
//           list.push(price[i]);
//           count++;
//           console.log("할인");
//         }
//       }
//       max = Math.max(count, max);
//       console.log(i, j, list);
//     }
//   }

//   return max;
// };

const solution = (n, products) => {
  let answer = 0;
  const m = products.length;
  products.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < m; i++) {
    let money = n - (products[i][0] / 2 + products[i][1]);
    let count = 1;
    for (let j = 0; j < m; j++) {
      if (j !== i && money < products[j][0] + products[j][1]) break;
      if (j !== i && money >= products[j][0] + products[j][1]) {
        money -= products[j][0] + products[j][1];
        count++;
      }
    }
    answer = Math.max(answer, count);
  }

  return answer;
};

let arr = [
  [8, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [6, 4],
];
console.log(solution(27, arr));
/**
 * 상품 가격대로 정렬
 * 상품가격 + 배송비가 n을 안넘으면 count++
 * 넘으면 가장 비싼 상품 가격/2
 * 50% 했을 때 넘으면 반복문 종료
 * 안넘으면 진행
 *
 */
