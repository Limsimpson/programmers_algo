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

// for문과 new Set을 이용한 풀이
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
