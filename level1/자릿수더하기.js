// 두 번째 풀이
const solution = (n)=> {
    n = n.toString().split("");
    return n.reduce((acc, curr) => acc + parseInt(curr), 0);
}

// 첫 번째 풀이
const solution = (n) => {
  let answer = 0;
  let makeString = n.toString();
  for (let i = 0; i < makeString.length; i++) {
    let makeNum = parseInt(makeString[i], 10);
    answer += makeNum;
  }
  return answer;
};

// 재귀함수
const solution = (n, a = 0, b = 0) => {
  return String(n).length == a
    ? b
    : solution(n, a + 1, (b += String(n)[a] * 1));
}

// charAt 사용
const solution = (n) => {
    let answer = 0;
    n = n.toString();
    for (var i = 0; i < n.length; i++) {
        answer += n.charAt(i) * 1;
    }
    return answer;
}

// do, while
const solution = (n) => {
    let answer = 0;
    do {
      answer += n % 10;
      n = Math.floor(n / 10);
    } while (n > 0);
    return answer;
}