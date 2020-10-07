// reduce를 이용한 풀이
const solution = (arr) => {
  return (
    arr.reduce((acc, curr) => {
      return acc + curr;
    }) / arr.length
  );
};

// for문을 이용한 풀이
const solution = (arr) => {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer / arr.length;
};
