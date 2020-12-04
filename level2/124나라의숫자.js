const solution = (n) => {
  let answer = "";
  let remainder;

  while (n !== 0) {
    remainder = n % 3;
    n = Math.floor(n / 3);

    if (remainder === 0) {
      answer = 4 + answer;
      n--;
    } else {
      answer = remainder + answer;
    }
  }

  return answer;
};

// 두 번째 풀이
const solution = (n) => {
  let answer = "";
  // 나머지를 배열의 index와 연결
  let base = [4, 1, 2];

  while (n) {
    answer = base[n % 3] + answer;
    n = Math.floor((n - 1) / 3);
  }

  return answer;
};

// 세 번째 풀이 (재귀)
const solution = (n) => {
  return n === 0
    ? ""
    : solution(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
};

// 네 번째 풀이 (재귀, 위와 비슷한 풀이)
const solution = (n) => {
  return n ? solution((n - (n % 3 || 3)) / 3) + (n % 3 || 4) : "";
};

// 다섯 번째 풀이
// 너무 당황스러워서 가져와봄
let $,
  solution = ($ = (n) => (n-- > 0 ? $((n / 3) ^ 0) + (1 << n % 3) : ""));
