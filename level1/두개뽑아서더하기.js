const solution = (numbers) => {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    numbers.slice(i + 1).map((num) => {
      let sumArray = numbers[i] + num;
      answer.indexOf(sumArray) === -1 && answer.push(sumArray);
    });
  }

  return answer.sort((a, b) => {
    return a - b;
  });
};
