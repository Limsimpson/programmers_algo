const solution = (x, n) => {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(i * x);
  }
  return answer;
};

// array를 사용한 풀이
// return Array(n)
//   .fill(x)
//   .map((v, i) => (i + 1) * v);
