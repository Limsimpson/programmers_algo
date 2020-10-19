const solution = (a, b) => {
  let answer = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer += i;
  }
  return answer;
};

// 짧은 풀이////////////////
return ((a + b) * (Math.abs(b - a) + 1)) / 2;
