const solution = (n) => {
  let answer = 0;
  let makeString = n.toString();
  for (let i = 0; i < makeString.length; i++) {
    let makeNum = parseInt(makeString[i], 10);
    answer += makeNum;
  }
  return answer;
};

// reduce 사용 방법
// return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0);

// charAt 사용 방법
// for (var i = 0; i < n.length; i++) {
//   answer += n.charAt(i) * 1;
// } 이전에 n을 string 처리

// do while
// do {
//   sum += n % 10;
//   n = Math.floor(n / 10);
// } while (n > 0);

// 재귀 함수
// function solution(n, a = 0, b = 0) {
//   return String(n).length == a
//     ? b
//     : solution(n, a + 1, (b += String(n)[a] * 1));
// }
