const solution = (priorities, location) => {
  let answer = 1;
  let queue = [];

  priorities.forEach((priority, idx) => {
    queue.push({
      priority,
      location: idx,
    });
  });

  while (queue.length > 0) {
    let maximum = queue
      .map((e) => e.priority)
      .reduce((acc, cur) => {
        return Math.max(acc, cur);
      });
    if (queue[0].priority < maximum) {
      queue = [...queue.slice(1), queue[0]];
    } else {
      if (queue[0].location === location) {
        break;
      }
      queue = queue.slice(1);
      answer++;
    }
  }
  return answer;
};

// shift와 some을 이용한 다른 풀이
const solution = (priorities, location) => {
  let list = priorities.map((t, i) => ({
    my: i === location,
    val: t,
  }));
  let count = 0;
  while (true) {
    let cur = list.shift();
    if (list.some((t) => t.val > cur.val)) {
      list.push(cur);
    } else {
      count++;
      if (cur.my) return count;
    }
  }
};
