const solution = (n) => {
  function isDecimal(n) {
    let value = true;
    for (let i = 2; i <= n; i++) {
      for (let j = 2; j <= i - 1; j++) {
        if (i % j === 0) {
          value = false;
        }
      }
    }
    return value;
  }

  let answer = 0;
  for (let k = 2; k <= n; k++) {
    if (isDecimal(k)) {
      answer += 1;
    }
    console.log(isDecimal(k));
  }

  return answer;
};
