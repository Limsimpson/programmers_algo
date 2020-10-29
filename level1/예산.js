// reduce를 쓸 경우 길이가 1개인 배열에 대해 값을 처리할 수 없음.
const solution = (d, budget) => {
  let answer = 0;
  if (d.length === 1 && d[0] <= budget) answer += 1;
  d.sort((a, b) => a - b).reduce((acc, curr) => {
    if (answer === 0 && budget >= acc) {
      if (budget < acc + curr) answer += 1;
      else answer += 2;
    } else {
      if (budget >= acc && budget >= acc + curr) answer += 1;
    }
    return acc + curr;
  });
  return answer;
};

// 짧은 풀이 ////////////////////////////////
function solution(d, budget) {
  return ~(
    ~d
      .sort((a, b) => a - b)
      .map((v) => (budget -= v))
      .findIndex((v) => v < 0) || ~d.length
  );
}

// 다른 방식의 계산 /////////////////////////
function solution(d, budget) {
  let answer = 0;
  let money = 0;
  d.sort((a, b) => a - b).forEach(function (val) {
    money += val;
    if (money <= budget) {
      answer++;
    }
  });
  return answer;
}
