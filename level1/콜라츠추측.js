const solution = (num, answer = 0) => {
  if (answer < 500) {
    if (num === 1) {
      return answer;
    } else {
      if (num % 2 === 0) {
        return solution(num / 2, answer + 1);
      } else {
        return solution(num * 3 + 1, answer + 1);
      }
    }
  } else {
    return -1;
  }
};
