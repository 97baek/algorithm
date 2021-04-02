const solution = (progresses, speeds) => {
  const queue = progresses;
  const speedQueue = speeds;
  const answer = [];
  let tasks = 0;
  // let day=0;

  while (queue.length !== 0) {
    // console.log(`day: ${day}, queue: ${queue}`)
    for (let i = 0; i < queue.length; i++) {
      if (queue[i] <= 100) {
        queue[i] += speedQueue[i];
      }
    }
    tasks = 0;
    while (queue[0] >= 100) {
      queue.shift();
      speedQueue.shift();
      tasks++;
    }
    if (tasks !== 0) {
      answer.push(tasks);
    }
  }
  return answer;
};
