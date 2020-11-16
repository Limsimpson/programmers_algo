const solution = (phone_number) => {
  // String.repeat()는 괄호 안의 숫자만큼 string을 반복
  // Array.slice()는 괄호 안의 인덱스만큼 배열을 자름, -는 뒤의 인덱스부터 계산
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
};

// 첫 번째 풀이
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
