const solution = (cacheSize, cities) => {
  let answer = 0;

  const cache = Array(cacheSize).fill(0);

  for (let i = 0; i < cities.length; i++) {
    // cache hit
    const lowerCityName = cities[i].toLowerCase();
    if (cache.includes(lowerCityName)) {
      const idx = cache.indexOf(lowerCityName);
      const input = cache.splice(idx, 1);
      cache.unshift(input[0].toLowerCase());
      answer++;
      // cache miss
    } else {
      cache.unshift(lowerCityName);
      cache.pop();
      answer += 5;
    }
  }
  return answer;
};
