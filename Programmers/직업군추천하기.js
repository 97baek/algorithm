const solution = (table, languages, preference) => {
  let answer = [];
  let max = Number.MIN_SAFE_INTEGER;
  table.forEach((column) => {
    const temp = column.split(" ");
    let total = 0;
    for (let i = 0; i < languages.length; i++) {
      const idx = temp.indexOf(languages[i]);
      if (idx > 0) {
        let score = 6 - idx;
        total += score * preference[i];
      }
    }

    if (total > max) {
      max = total;
      answer = [temp[0]];
    }
    if (total === max) {
      answer.push(temp[0]);
    }
  });

  return answer.sort()[0];
};
