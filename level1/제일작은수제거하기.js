// 두 번째 풀이
const solution = (arr) => {
  let small = arr[0];
  // 길이가 1 이하면 [-1]을 리턴
  if (arr.length <= 1) return [-1];
  // 가장 작은 값을 찾는 수식
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < small) small = arr[i];
  }
  // 작은 값과 일치하는 요소 삭제
  // for문 대신 arr.filter((el) => el !== small);로도 사용 가능
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === small) {
      arr.splice(j, 1);
      return arr;
    }
  }
};

// 첫 번째 풀이
const solution = (arr) => {
  if (arr.length <= 1) {
    arr = [-1];
  } else {
    // Math.min(...arr); 이런 식으로도 사용 가능
    // arr.reduce((a, b) => Math.min(a, b));
    let findMinIdx = arr.indexOf(Math.min.apply(null, arr));
    arr.splice(findMinIdx, 1);
  }
  return arr;
};
