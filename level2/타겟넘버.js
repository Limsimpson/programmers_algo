// 가장 빠름
const solution = (numbers, target) => {
  let answer = 0;
  getAnswer(0, 0);
  function getAnswer(idx, value) {
    if (idx < numbers.length) {
      getAnswer(idx + 1, value + numbers[idx]);
      getAnswer(idx + 1, value - numbers[idx]);
    } else {
      if (value === target) answer++;
    }
  }
  return answer;
};

// 중간
const solution = (numbers, target) => {
  return getAnswer(numbers, 0, target);
  function getAnswer(num, val, tgt) {
    if (num.length > 0) {
      let tmp = num.pop() + val;
      return (
        getAnswer(num.slice(), tmp, tgt) + getAnswer(num.slice(), -tmp, tgt)
      );
    } else {
      if (val === tgt) return 1;
      else return 0;
    }
  }
};

// 가장 느림
const solution = (numbers, target) => {
  let answer = 0;
  let arr = [];
  let numLen = Math.pow(2, numbers.length + 1);
  let startPoint = Math.pow(2, numbers.length);
  let idx = 0;
  let buff = 3;

  for (let i = 0; i < numLen; i++) {
    if (i === 0) {
      arr.push(0);
    } else {
      if (i % 2 === 0) {
        arr[i - 1] = arr[parseInt((i - 1) / 2)] - numbers[idx];
        arr[i] = arr[parseInt((i - 1) / 2)] + numbers[idx];
      }
      if (i === buff - 1) {
        buff = Math.pow(2, ++idx + 2) - 1;
      }
    }
  }

  for (let i = startPoint; i < numLen; i++) {
    if (target === arr[i]) answer++;
  }

  return answer;
};
