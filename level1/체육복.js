// 두 번째 풀이
const solution = (n, lost, reserve) => {
  // 체육복을 잃어버린 학생 중 여벌옷이 있는 학생을 지움 (중복 제거)
  const deduplication_lost = lost.filter(
    (lost_el) => !reserve.includes(lost_el)
  );

  // 여벌옷을 가진 학생들중 체육복을 잃어버린 학생을 지움 (중복 제거)
  let deduplication_reserve = reserve.filter(
    (res_el) => !lost.includes(res_el)
  );

  // 체육복을 빌리고 남은 학생 수
  let remain = deduplication_lost.filter((dedu_lost_el) => {
    // 체육복을 빌린 학생
    const isLend = deduplication_reserve.find(
      // 절대 값으로 1차이가 나는 친구를 구함
      (dedu_res_el) => Math.abs(dedu_res_el - dedu_lost_el) === 1
    );

    // 빌려줄 친구가 없다면 true를 return
    if (!isLend) return true;

    // 여벌옷을 빌려준 친구는 지움
    deduplication_reserve.splice(deduplication_reserve.indexOf(isLend), 1);
    // 속도는 비슷하나 위의 식이 약간 빠름
    // deduplication_reserve = deduplication_reserve.filter(
    //   (dedu_res_el) => dedu_res_el !== isLend
    // );
  }).length;

  return n - remain;
};

// 첫 번째 풀이
const solution = (n, lost, reserve) => {
  // 중복 된 사람들
  let duplicate = reserve.filter((el) => {
    return el === lost[lost.indexOf(el)];
  });

  // 값 초기화 (총 인원 - 잃어버린 사람 + 중복 된 사람)
  let answer = n - lost.length + duplicate.length;

  // 잃어버린 사람 중 중복 제거
  lost = lost.filter((el) => {
    return el !== duplicate[duplicate.indexOf(el)];
  });

  // 여벌옷이 있는 사람 중 중복 제거
  reserve = reserve.filter((el) => {
    return el !== duplicate[duplicate.indexOf(el)];
  });

  for (let i = 0; i <= lost.length; i++) {
    reserve.forEach((el) => {
      if (lost[i] + 1 === el || lost[i] - 1 === el) {
        lost.splice(i, 1);
        reserve.splice(reserve.indexOf(el), 1);
        answer++;
        i--;
      }
    });
  }
  return answer;
};

// 다른 사람의 풀이
// answer를 배열로 만든 풀이 (속도 느림)
const solution = (n, lost, reserve) => {
  const actualReserve = reserve.filter((el) => lost.indexOf(el) === -1);
  const actualLost = lost.filter((el) => reserve.indexOf(el) === -1);

  const set = Array.apply(undefined, new Array(n)).map((el, i) =>
    actualLost.indexOf(i + 1) === -1 ? true : false
  );

  for (let hero of actualReserve) {
    if (set[hero - 1 - 1] === false) {
      set[hero - 1 - 1] = true;
    } else if (set[hero - 1 + 1] === false) {
      set[hero - 1 + 1] = true;
    }
  }

  return set.filter((el) => el).length;
};
