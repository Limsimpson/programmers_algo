const solution = (priorities, location) => {
  let answer = 0;
  let loc = priorities[location];

  priorities = priorities.map((el, idx) => {
    return { key: idx, val: el };
  });
  priorities = priorities.sort((a, b) => a.val - b.val);

  for (let i = 0; i < priorities.length - 1; i++) {
    if (priorities[i].val >= priorities[i + 1].val) {
      priorities.splice(priorities[i + 1], 1);
      answer++;
      i--;
    } else {
      if (priorities[i].val === loc) {
        answer = priorities[i].key;
        break;
      }
    }
  }
  return answer;
};
