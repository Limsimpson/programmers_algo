// 두 번째 풀이
// indexOf로 중복 제거
const solution = (numbers) => {
  let sums = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      if (i === j) continue;
      else if (sums.indexOf(sum) === -1) sums.push(sum);
    }
  }
  return sums.sort((a, b) => a - b);
};

// 첫 번째 풀이
// numbers에 해당 i번째 수를 제거한 배열을 만들고 더해줌
// indexOf로 중복 제거
const solution = (numbers) => {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    numbers.slice(i + 1).map((num) => {
      let sumArray = numbers[i] + num;
      answer.indexOf(sumArray) === -1 && answer.push(sumArray);
    });
  }
  return answer.sort((a, b) => a - b);
};

// new Set을 이용해 중복 제거
function solution(numbers) {
  const temp = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }
  const answer = [...new Set(temp)];
  return answer.sort((a, b) => a - b);
}
