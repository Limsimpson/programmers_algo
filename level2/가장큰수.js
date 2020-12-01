// 두 번째 풀이
const solution = (numbers) => {
  let answer = "";
  numbers = numbers.sort((a, b) => {
    let strA = a.toString();
    let strB = b.toString();
    return strB + strA - (strA + strB);
  });
  answer = numbers[0] === 0 ? "0" : numbers.join("");
  return answer;
};

// 첫 번째 풀이
// 이게 약간 더 빠름
const solution = (numbers) => {
  let combinedNum = numbers
    .sort((x, y) => +("" + y + x) - +("" + x + y))
    .join("");
  return combinedNum <= 0 ? "0" : combinedNum;
};
