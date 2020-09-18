const solution = (arr) => {
  let answer = [];
  arr.map((el, idx) => {
    el !== arr[idx + 1] && answer.push(el);
  });
  return answer;
};

// filter를 사용한 간단한 풀이
// return arr.filter((val, idx) => val != arr[idx + 1]);
