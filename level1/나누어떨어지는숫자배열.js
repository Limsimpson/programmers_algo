// 두 번째 풀이
// 시간은 첫 번째 풀이와 비슷함
const solution = (arr, divisor) => {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) answer.push(arr[i]);
  }
  if (answer.length <= 0) answer.push(-1);
  else answer.sort((a, b) => a - b);
  return answer;
};

// 첫 번째 풀이
const solution = (arr, divisor) => {
  arr = arr.filter((el) => {
    return el % divisor === 0;
  });
  return arr.length > 0 ? arr.sort((a, b) => a - b) : [-1];
};
