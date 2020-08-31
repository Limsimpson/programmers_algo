function solution(arr) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const answer = arr.reduce(reducer) / arr.length;
  return answer;
}
