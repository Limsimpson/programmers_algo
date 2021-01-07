// 두 번째 풀이
const solution = (s) => {
  let answer = '';
  let idx = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      answer += ' ';
      idx = 0;
    } else {
      answer += idx % 2 === 0 ? s[i].toUpperCase() : s[i].toLowerCase();
      idx++;
    }
  }
  return answer;
};

// 첫 번째 풀이
const solution = (s) => {
  let answer = '';
  s = s.split(' ');
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
      answer += j % 2 === 0 ? s[i][j].toUpperCase() : s[i][j].toLowerCase();
    }
    if (i < s.length - 1) answer += ' ';
  }
  return answer;
};

// replace와 정규식을 사용한 풀이
const solution = (s) => {
  // \w는 word를 표현하며 알파벳 + 숫자 + _중의 한 문자를 의미
  // g는 global을 표현하며 대상 문자열 내에 모든 패턴을 검색하는 것을 의미
  return s.toUpperCase().replace(/(\w)(\w)/g, (a) => {
    return a[0] + a[1].toLowerCase();
  });
};
