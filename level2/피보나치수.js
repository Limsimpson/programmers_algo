// 첫 번째 풀이, 속도 빠름
const solution = (n) => {
  let prev = 0;
  let next = 1;
  let result;
  let answer;

  for (let i = 2; i <= n; i++) {
    result = (prev + next) % 1234567;
    prev = next;
    next = result;
  }

  answer = result;

  return answer;
};

// 두 번째 풀이
const solution = (n) => {
  let answer = [0, 1];

  for (let i = 2; i <= n; i++) {
    let temp = answer[i - 1] + answer[i - 2];
    answer.push(temp % 1234567);
  }

  return answer[n];
};
