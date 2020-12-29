const solution = (s) => {
  let answer = 0;
  let repeat = s.length;
  let compArr = [];

  // 1 ~ 문자열 개수 / 2 이하의 개수만 가능
  for (let i = 0; i < repeat; i++) {
    // 문자열 압축 가능 한 수
    let num = i + 1;
    // 반복 횟수
    let count = 1;
    let newStr = '';

    for (let j = 0; j < s.length; j = j + num) {
      // substring(시작 인덱스, 종료 인덱스)
      let curr = s.substring(j, j + num);
      let next = s.substring(j + num, j + num + num);

      if (curr === next) {
        count++;
      } else {
        if (count !== 1) {
          newStr = newStr + count + curr;
        } else {
          newStr = newStr + curr;
        }
        count = 1;
      }
    }
    // 각 경우 중 가장 짧은 수
    compArr.push(newStr.length);
  }

  answer = Math.min(...compArr);
  return answer;
};
