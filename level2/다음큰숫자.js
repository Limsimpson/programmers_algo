const solution = (n) => {
  function NumOfOne(num) {
    return num
      .toString(2)
      .split("")
      .filter((el) => el === "1").length;
  }

  let giveValLen = NumOfOne(n);

  for (let i = 1; true; i++) {
    let comparisonValLen = NumOfOne(n + i);

    if (giveValLen === comparisonValLen) {
      return n + i;
    }
  }
};

// 시프트 연산자 풀이
// 알고리즘 시간 복잡도 O(log n) 이지만 사실상 O(a)에 가까움.
// 655395 입력후 1억번 실행에 소요 시간450ms 미만
const solution = (n) => {
  let i, j;
  // 1을 찾을때까지 우로 쉬프트, 쉬프트 횟수 = i
  for (i = 0; !(n & 1); i++) {
    n = n >> 1;
  }
  // 0을 찾을때까지 우로 쉬프트, 1의 갯수 = j
  for (j = 0; n & 1; i++, j++) {
    n = n >> 1;
  }
  // 0자리에 1대입, 1의 갯수 -1, i === j 가 될때까지 죄로 쉬프트하면서 쉬프트 횟수 -1
  for (j--, n++; i !== j; i--) {
    n = n << 1;
  }
  // i === 0 될때까지 좌로 쉬프트 하면서 쉬프트 횟수 -1, 0자리에 1대입
  for (i; i; i--, n++) {
    n = n << 1;
  }
  return n;
};

// match와 while을 사용한 풀이 재귀보다 빠름
const solution = (n) => {
  let giveValLen = n.toString(2).match(/1/g).length;

  while (n++) {
    if (giveValLen === n.toString(2).match(/1/g).length) return n;
  }
};

// match와 재귀를 활용한 풀이
const solution = (n, comparisonVal = n + 1) => {
  let giveValLen = n.toString(2).match(/1/g).length;
  let comparisonValLen = comparisonVal.toString(2).match(/1/g).length;

  if (giveValLen === comparisonValLen) return comparisonVal;
  else return solution(n, comparisonVal + 1);
};
