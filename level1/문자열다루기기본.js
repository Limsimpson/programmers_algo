const solution = (s) => {
  let answer = true;
  if (s.length === 4 || s.length === 6) {
    for (let i = 0; i < s.length; i++) {
      let ascii = s[i].charCodeAt();
      if (ascii < 48 || ascii > 57) {
        answer = false;
      }
    }
  } else {
    answer = false;
  }
  return answer;
};

// 처음 문제 풀이
const solution = (s) => {
  if (s.length === 4 || s.length === 6) {
    s = s.replace("e", "a");
    s = s.replace(" ", "a");
    return Number(s) ? true : false;
  } else {
    return false;
  }
};

// 정규식을 이용한 풀이 길이 && 숫자
function solution(s) {
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}

// 길이 && 숫자
/^(\d{4}|\d{6})$/;

// 또 다른 정규식 숫자만
/^[0-9]*$/;
/[0-9]/g;

// 정규식 문자
result =
  (s.length == 4 || s.length == 6 || false) && s.replace(/\d/g, "").length == 0;
