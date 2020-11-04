const solution = (progresses, speeds) => {
  let workArr = [];
  let answer = [];

  workArr = progresses.map((el, idx) => {
    return Math.ceil((100 - el) / speeds[idx]);
  });

  for (let i = 0; i < workArr.length; i++) {
    if (i === 0) {
      answer.push(1);
    } else {
      if (workArr[i] <= workArr[i - 1]) {
        answer[i - 1] += 1;
        workArr.splice(i, 1);
        i--;
      } else {
        answer.push(1);
      }
    }
  }

  return answer;
};
