const solution = (s) => {
  let answer = [];

  if (s.length % 2 !== 0) {
    return 0;
  } else {
    for (let i = 0; i < s.length; i++) {
      if (0 !== answer) {
        if (answer[answer.length - 1] === s[i]) {
          answer.pop();
        } else {
          answer.push(s[i]);
        }
      } else {
        answer.push(s[i]);
      }
    }
  }

  return answer.length === 0 ? 1 : 0;
};
