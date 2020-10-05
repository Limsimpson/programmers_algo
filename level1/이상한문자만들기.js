const solution = (s) => {
  let answer = "";
  s = s.split(" ");
  s = s.forEach((word, idx) => {
    for (let j = 0; j < word.length; j++) {
      answer += j % 2 === 0 ? word[j].toUpperCase() : word[j].toLowerCase();
    }
    if (idx !== s.length - 1) {
      answer += " ";
    }
  });
  return answer;
};
// 속도와 용량은 위의 식이 더 짧음

// replace와 정규식을 사용한 풀이
// return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
//   return a[0].toUpperCase() + a[1].toLowerCase();
// });
// \w는 word를 표현하며 알파벳 + 숫자 + _중의 한 문자를 의미
// g는 global을 표현하며 대상 문자열 내에 모든 패턴을 검색하는 것을 의미

// 테스트는 통과 채점은 1, 2, 6번만 통과 왜그런지 같이 고민하려고 가져옴
const solution = (s) => {
  let answer = "";
  let idx = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      idx = 0;
    } else {
      if (i % 2 === 0) {
        answer += s[i].toUpperCase();
        idx++;
      } else {
        answer += s[i].toLowerCase();
        idx++;
      }
    }
  }
  return answer;
};
