const solution = (arr) => {
  let array = arr.map((v) => v + "");
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    array[i] = array[i].split("").reverse().join("");
    num = +array[i];
    console.log(num);
    if (isPrime(num)) answer.push(num);
  }

  return answer;
};

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const arr = [32, 55, 62, 20, 250, 370, 200, 30, 100, 90, 2];
console.log(solution(arr));
