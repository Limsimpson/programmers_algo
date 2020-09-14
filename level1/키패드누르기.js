const solution = (numbers, hand) => {
  let answer = "";

  let matrix = [];
  for (let i = 0; i <= 3; i++) {
    matrix.push([i * 3 + 1, i * 3 + 2, i * 3 + 3]);
  }

  let lastL = 10;
  let lastR = 12;

  function getIdx(n) {
    for (let i = 0; i < matrix.length; i++) {
      let idx = matrix[i].indexOf(n);
      if (idx > -1) {
        return [i, idx];
      }
    }
  }

  function checkHand(hand, n) {
    switch (hand) {
      case "left":
        lastL = n;
        answer += "L";
        break;
      case "right":
        lastR = n;
        answer += "R";
        break;
    }
  }

  numbers.forEach((n) => {
    n = n === 0 ? 11 : n;

    let mIdx = getIdx(n);
    let mLastLIdx = getIdx(lastL);
    let mLastRIdx = getIdx(lastR);

    let distanceL =
      Math.abs(mIdx[0] - mLastLIdx[0]) + Math.abs(mIdx[1] - mLastLIdx[1]);
    let distanceR =
      Math.abs(mIdx[0] - mLastRIdx[0]) + Math.abs(mIdx[1] - mLastRIdx[1]);

    if (mIdx[1] === 0) {
      answer += "L";
      lastL = n;
    } else if (mIdx[1] === 2) {
      answer += "R";
      lastR = n;
    } else {
      if (distanceL > distanceR) {
        answer += "R";
        lastR = n;
      } else if (distanceL < distanceR) {
        answer += "L";
        lastL = n;
      } else {
        checkHand(hand, n);
      }
    }
  });

  return answer;
};
