const solution = (seoul) => {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
};

// 처음 풀이 /////////////////////
function solution(seoul) {
  var answer = seoul.indexOf("Kim");
  return "김서방은 " + answer + "에 있다";
}
