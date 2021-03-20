const maxArea = (height) => {
  let start = 0;
  let end = height.length - 1;
  let area = 0;

  while (start < end) {
    if (height[start] < height[end]) {
      area = Math.max((end - start) * height[start], area);
      start++;
    } else {
      area = Math.max((end - start) * height[end], area);
      end--;
    }
  }

  return area;
};
