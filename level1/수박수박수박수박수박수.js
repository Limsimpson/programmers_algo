// 두 번째 풀이
// 속도 가장 빠름
const solution = (n) => {
  let answer = "";
  if (n === 1) answer = "수";
  else answer = "수박".repeat(n - 1).substring(0, n);
  return answer;
};

// 위와 유사한 풀이
const solution = (n) => {
  return "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");
};

// 첫 번째 풀이
// 속도 중간
const solution = (n) => {
  let answer = "";
  for (let i = 1; i <= n; i++) {
    answer += i % 2 === 0 ? "박" : "수";
  }
  return answer;
};

// 넣어야 할 문자가 여러개일 때 사용하면 좋을듯 charAt
// 시간이 오래걸림
const solution = (n) => {
  let answer = "";
  for (let i = 0; i < n; i++) {
    let idx = i % 2;
    answer += "수박".charAt(idx);
  }
  return answer;
};
