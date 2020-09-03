const solution = (phone_number) => {
  let answer = "";
  let getLength = phone_number.length;

  for (let i = 0; i < getLength; i++) {
    answer += i < getLength - 4 ? "*" : phone_number[i];
  }

  return answer;
};

// 정규식 사용 방법
// replace(/\d(?=\d{4})/g, *)

// repeat 메소드 사용
