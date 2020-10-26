const solution = (N, stages) => {
  let result = [];
  let answer = [];

  for (let i = 1; i <= N; i++) {
    let onStage = stages.filter((el) => i === el);
    let endStage = stages.filter((el) => i <= el);
    result.push(onStage.length / endStage.length);
  }

  result = result.map((el, idx) => ({ idx: idx, el: el }));
  result = result.sort((a, b) => b.el - a.el);
  answer = result.map((el) => el.idx + 1);

  return answer;
};

// 숫자가 클 때 시간이 더 짧게 걸리는 풀이 ////////////
// filter, sort, map을 쓰지 않음 ///////////////
function solution(N, stages) {
  const obj = {};
  for (let i = 1; i <= N; i++) {
    obj[i] = 0;
  }

  // 스테이지에 머물고있는 인원 파악
  stages.forEach((v) => {
    if (v !== N + 1) {
      obj[v] += 1;
    }
  });

  // 계산
  let stay = 0;
  let stayed = stages.length;
  const failPercentageArr = [];
  for (let key in obj) {
    stay = obj[key];
    console.log(stay, "/", stayed);
    if (stayed == 0 || stay == 0) {
      failPercentageArr.push({ stage: key, fail: 0 });
    } else {
      failPercentageArr.push({ stage: key, fail: stay / stayed });
    }
    stayed = stayed - stay;
  }

  // 정렬
  failPercentageArr.sort((a, b) => {
    if (b.fail > a.fail) {
      return 1;
    } else if (b.fail < a.fail) {
      return -1;
    } else if (b.fail == a.fail) {
      return a.stage - b.stage;
    }
  });

  return failPercentageArr.map((v) => {
    return Number(v.stage);
  });
}
