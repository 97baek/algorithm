const solution = (dirs) => {
  let curr = [0, 0];
  const paths = new Map();

  for (let i = 0; i < dirs.length; i++) {
    const prevLocation = [...curr];
    if (dirs[i] === "U") {
      curr[1]++;
    } else if (dirs[i] === "R") {
      curr[0]++;
    } else if (dirs[i] === "D") {
      curr[1]--;
    } else if (dirs[i] === "L") {
      curr[0]--;
    }

    if (curr[1] > 5 || curr[1] < -5 || curr[0] > 5 || curr[0] < -5) {
      console.log("초과");
      curr = prevLocation;
      continue;
    }

    paths.set(addToPath(prevLocation, curr), 1);
    console.log(paths);
  }

  return paths.size;
};

const addToPath = (prev, curr) => {
  return `${((prev, curr), (curr, prev))}`;
};

console.log(solution("LLLLRLRLRLL"));
