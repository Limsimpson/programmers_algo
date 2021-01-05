function quad(array, size, countArray, start) {
  // 시작 지점의 값 [0, 0] index 0은 행 index 1은 열
  let first = array[start[0]][start[1]];

  if (size === 1) {
    // size(arr의 length)가 1이면 모든 계산이 끝난 것.
    // first가 0이면 0에 대한 count를 1 증가, 아니면 1에 대한 count를 1 증가
    first === 0 ? (countArray[0] += 1) : (countArray[1] += 1);
    return;
  }

  // 총 길이를 반으로 나눠 정사각형을 만들어준다. x축과 y축을 각각 반으로 나눔.
  let half = size / 2;
  const keep = true;

  // 사각형 안의 모든 값이 일치하는지 확인, 하나라도 다를 경우 keep을 false로 변경.
  for (let i = start[0]; i < start[0] + size; i++) {
    for (let j = start[1]; j < start[1] + size; j++) {
      if (first !== array[i][j]) {
        keep = false;
        break;
      }
    }
    if (!keep) break;
  }

  // keep이 true일 경우 first가 0이면 0에 대한 count를 1 증가, 아니면 1에 대한 count를 1 증가
  if (keep) {
    first === 0 ? countArray[0]++ : countArray[1]++;
    return;
  }

  // keep이 false일 경우 4등분해 quad 다시 호출
  quad(array, half, countArray, start); // [0, 0] 시작점부터
  quad(array, half, countArray, [start[0], start[1] + half]); // x축 절반이 시작점
  quad(array, half, countArray, [start[0] + half, start[1]]); // y축 절반이 시작점
  quad(array, half, countArray, [start[0] + half, start[1] + half]); // x, y축 절반이 시작점
  return;
}

const solution = (arr) => {
  const countArray = [0, 0];
  let size = arr.length;
  quad(arr, size, countArray, [0, 0]);
  return countArray;
};
