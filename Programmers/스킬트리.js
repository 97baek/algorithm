const solution = (skill, skill_trees) => {
  let answer = 0;
  const order = skill.split("");
  const skills = [];

  for (let i = 0; i < skill_trees.length; i++) {
    let temp = [];
    for (let j = 0; j < skill_trees[i].length; j++) {
      if (order.includes(skill_trees[i][j])) {
        temp.push(skill_trees[i][j]);
      }
    }
    if (isPossible(order, temp)) answer++;
  }

  return answer;
};

const isPossible = (arr1, arr2) => {
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] !== arr1[i]) return false;
  }
  return true;
};
