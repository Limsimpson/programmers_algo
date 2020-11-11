// for문을 이용한 풀이
const solution = (seoul) => {
  let answer;
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      answer = i;
      break;
    }
  }
  return `김서방은 ${answer}에 있다`;
};

// indexOf를 이용한 풀이
const solution = (seoul) => {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
};
