const solution = (numbers, hand) => {
  // 행렬에서의 인덱스를 구하는 함수
  function getIdx(arr, n) {
    for (let i = 0; i < arr.length; i++) {
      let idx = arr[i].indexOf(n);
      if (idx > -1) {
        return [i, idx];
      }
    }
  }

  // 행렬
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
  ];

  let answer = "";

  // 마지막 L과 R의 값 초기 설정 *과 #
  let lastL = 10;
  let lastR = 12;

  numbers.forEach((n) => {
    // 0은 *과 # 사이 값인 11로 만들어준다.
    n = n === 0 ? 11 : n;

    // 행렬에서의 인덱스 값
    let mIdx = getIdx(matrix, n);
    let mLastLIdx = getIdx(matrix, lastL);
    let mLastRIdx = getIdx(matrix, lastR);

    // 현재 값과 마지막 L과 R의 거리 값
    let absMinusLCol = Math.abs(mIdx[0] - mLastLIdx[0]);
    let absMinusLRow = Math.abs(mIdx[1] - mLastLIdx[1]);
    let absMinusRCol = Math.abs(mIdx[0] - mLastRIdx[0]);
    let absMinusRRow = Math.abs(mIdx[1] - mLastRIdx[1]);

    // 현재 값 (x, y)에서 y 값이 0이면 "L"
    if (mIdx[1] === 0) {
      answer += "L";
      lastL = n;

      // 현재 값 (x, y)에서 y 값이 2이면 "R"
    } else if (mIdx[1] === 2) {
      answer += "R";
      lastR = n;
    } else {
      // 현재 값에서 마지막 L과 R의 거리가 같을 때
      if (absMinusLCol === absMinusRCol) {
        // 마지막 L의 (x, y) y 값이 1이면
        if (mLastLIdx[1] === 1) {
          answer += "L";
          lastL = n;
        } else if (mLastRIdx[1] === 1) {
          answer += "R";
          lastR = n;
        } else {
          if (hand === "left") {
            answer += "L";
            lastL = n;
          } else {
            answer += "R";
            lastR = n;
          }
        }
      } else {
        if (absMinusLCol < absMinusRCol) {
          if (absMinusRCol === 1 && absMinusRRow === absMinusLCol) {
            if (hand === "left") {
              answer += "L";
              lastL = n;
            } else {
              answer += "R";
              lastR = n;
            }
          } else {
            answer += "L";
            lastL = n;
          }
        } else {
          if (absMinusLCol === 1 && absMinusLRow === absMinusRCol) {
            if (hand === "left") {
              answer += "L";
              lastL = n;
            } else {
              answer += "R";
              lastR = n;
            }
          } else {
            answer += "R";
            lastR = n;
          }
        }
      }
    }
  });

  return answer;
};
