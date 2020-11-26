// 세 번째 풀이
// for문만 이용한 풀이 가장 느림
const solution = (arr1, arr2) => {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];
    // answer.push([]); 로도 사용 가능
    for (let j = 0; j < arr1[i].length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
      // answer[i].push(arr1[i][j] + arr2[i][j]); 로도 사용 가능
    }
  }
  return answer;
};

// 두 번째 풀이
// map만 사용한 풀이
const solution = (arr1, arr2) => {
  return arr1.map((arr_in_arr1, arr1_idx) => {
    return arr_in_arr1.map((el, arr_in_arr1_idx) => {
      return el + arr2[arr1_idx][arr_in_arr1_idx];
    });
  });
};
// 위와 같은 풀이 return의 표현만 다름
// const solution = (arr1, arr2) =>
//   arr1.map((arr_in_arr1, arr1_idx) =>
//     arr_in_arr1.map(
//       (el, arr_in_arr1_idx) => el + arr2[arr1_idx][arr_in_arr1_idx]
//     )
//   );

// 첫 번째 풀이
// 속도는 가장 빠르나 for문 안에 map을 쓰는 것이 좋지 않다고 들음
const solution = (arr1, arr2) => {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let sumEl = arr1[i].map((arr1_el, arr1_idx) => {
      return arr1_el + arr2[i][arr1_idx];
    });
    answer.push(sumEl);
  }
  return answer;
};
