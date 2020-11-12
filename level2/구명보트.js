const solution = (people, limit) => {
  let answer = 0;
  let forwardIdx = 0;
  let backwardIdx = people.length - 1;

  people = people.sort((a, b) => a - b);

  while (forwardIdx <= backwardIdx) {
    if (people[forwardIdx] + people[backwardIdx] <= limit) {
      forwardIdx++;
    }
    backwardIdx--;
    answer += 1;
  }

  return answer;
};

// 채점시 모두 통과 했으나 효율성 테스트에서 0 나옴
const solution = (people, limit) => {
  let answer = 0;

  // 정렬 추가
  people = people.sort((a, b) => a - b);
  for (let i = 0; i < people.length; i++) {
    // 맨 앞과 맨 뒤부터 차례대로 없앰
    for (let j = people.length - 1; j > 0; j--) {
      if (0 <= limit - people[i] - people[j]) {
        answer += 1;
        people.splice(j, 1);
        people.splice(i, 1);
        i--;
      } else continue;
    }
  }
  return answer + people.length;
};

// 2, 8, 14, 15번만 통과
const solution = (people, limit) => {
  let answer = 0;
  for (let i = 0; i < people.length; i++) {
    // 전체 배열을 순환
    for (let j = i + 1; j < people.length; j++) {
      if (0 <= limit - people[i] - people[j]) {
        answer += 1;
        people.splice(j, 1);
        people.splice(i, 1);
        i--;
      } else continue;
    }
  }
  return answer + people.length;
};
