const solution = (n, m) => {
  let answer = [0, 0];

  function multiple(num) {
    let divide = [];
    for (let i = 1; i <= num; i++) {
      divide.push(num % i === 0 ? i : 1);
    }
    return divide;
  }

  let commonMultiple = multiple(n).filter((el) => {
    return multiple(m).includes(el);
  });

  commonMultiple = Math.max(...commonMultiple);

  answer[0] = commonMultiple;

  if (commonMultiple.length === 1) {
    answer[1] = n * m;
  } else {
    answer[1] = commonMultiple * (n / commonMultiple) * (m / commonMultiple);
  }

  return answer;
};
