const solution = (numbers, hand) => {
  const left = {
    1: [0, 3],
    4: [0, 2],
    7: [0, 1],
  };
  const right = {
    3: [2, 3],
    6: [2, 2],
    9: [2, 1],
  };
  const center = {
    2: [1, 3],
    5: [1, 2],
    8: [1, 1],
    0: [1, 0],
  };

  const leftNum = Object.keys(left).map((n) => +n);
  const rightNum = Object.keys(right).map((n) => +n);
  const centerNum = Object.keys(center).map((n) => +n);

  let result = "";
  let currLeft = [0, 0];
  let currRight = [2, 0];

  for (let num of numbers) {
    // console.log(num, currLeft, currRight, center[num]);
    if (leftNum.includes(num)) {
      result += "L";
      currLeft = left[num];
    } else if (rightNum.includes(num)) {
      result += "R";
      currRight = right[num];
    } else {
      if (
        Math.abs(center[num][0] - currLeft[0]) + Math.abs(center[num][1] - currLeft[1]) >
        Math.abs(center[num][0] - currRight[0]) + Math.abs(center[num][1] - currRight[1])
      ) {
        result += "R";
        currRight = center[num];
      } else if (
        Math.abs(center[num][0] - currLeft[0]) + Math.abs(center[num][1] - currLeft[1]) <
        Math.abs(center[num][0] - currRight[0]) + Math.abs(center[num][1] - currRight[1])
      ) {
        result += "L";
        currLeft = center[num];
      } else {
        if (hand === "right") {
          result += "R";
          currRight = center[num];
        } else {
          result += "L";
          currLeft = center[num];
        }
      }
    }
  }

  return result;
};
