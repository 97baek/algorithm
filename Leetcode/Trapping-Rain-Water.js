const trap = (height) => {
  let total = 0;
  let pointer = 0;

  while (pointer < height.length) {
    let maxLeft = 0;
    let maxRight = 0;
    let currentHeight = 0;
    for (let i = pointer; i >= 0; i--) {
      maxLeft = Math.max(maxLeft, height[i]);
    }

    for (let i = pointer; i < height.length; i++) {
      maxRight = Math.max(maxRight, height[i]);
    }
    total += Math.min(maxLeft, maxRight) - height[pointer];
    pointer++;
  }
  return total;
};
