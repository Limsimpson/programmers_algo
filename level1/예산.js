const solution = (d, budget) => {
  let answer = 0;
  d = d.sort((a, b) => a - b);
  d.reduce((acc, curr) => {
    if (answer === 0 && (budget === acc || budget === acc + curr)) {
      answer = 1;
      return;
    } else {
      if (budget < acc || budget < acc + curr) {
        return;
      } else if (budget >= acc && budget >= acc + curr) {
        answer += 1;
        return acc + curr;
      }
    }
  });
  return answer + 1;
};
