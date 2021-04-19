function solution(absolutes, signs) {
  let answer = absolutes.reduce((acc, curr, idx) => {
      return signs[idx] ? acc + curr : acc - curr;
  }, 0);
  return answer;
}