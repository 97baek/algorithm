const twoSum = function (nums, target) {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        answer.push(i, j);
        return answer;
      }
    }
  }
};
