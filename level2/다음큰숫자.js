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

//match와 while을 사용한 풀이 (가장 빠름)
const solution = (n) => {
  let giveValLen = n.toString(2).match(/1/g).length;

  while (n++) {
    if (giveValLen === n.toString(2).match(/1/g).length) return n;
  }
};

// match와 재귀를 활용한 풀이 (빠름)
const solution = (n, comparisonVal = n + 1) => {
  let giveValLen = n.toString(2).match(/1/g).length;
  let comparisonValLen = comparisonVal.toString(2).match(/1/g).length;

  if (giveValLen === comparisonValLen) return comparisonVal;
  else return solution(n, comparisonVal + 1);
};
