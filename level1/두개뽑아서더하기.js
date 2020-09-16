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

// for문 사용
// function solution(numbers) {
//   var answer = [];

//   for (let i = 0; i < numbers.length - 1; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (answer.indexOf(numbers[i] + numbers[j]) === -1) {
//         answer.push(numbers[i] + numbers[j]);
//       }
//     }
//   }

//   return answer.sort((a, b) => a - b);
// }
