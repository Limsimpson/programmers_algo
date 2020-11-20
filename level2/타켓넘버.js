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
  function getAnswer(num, r, tgt) {
    if (num.length > 0) {
      let tmp = num.pop() + r;
      return (
        getAnswer(num.slice(), tmp, tgt) + getAnswer(num.slice(), -tmp, tgt)
      );
    } else {
      if (r === tgt) return 1;
      else return 0;
    }
  }
};

// 가장 느림
const solution = (numbers, target) => {
  let count = 0;
  let arr = [];
  let arrLength = Math.pow(2, numbers.length + 1);
  let startPoint = Math.pow(2, numbers.length);
  let j = 0;
  let buff = 3;

  for (let i = 0; i < arrLength; i++) {
    if (i === 0) {
      arr.push(0);
    } else {
      if (i % 2 == 0) {
        arr[i - 1] = arr[parseInt((i - 1) / 2)] - numbers[j];
        arr[i] = arr[parseInt((i - 1) / 2)] + numbers[j];
      }
      if (i == buff - 1) {
        buff = Math.pow(2, ++j + 2) - 1;
      }
    }
  }

  for (let i = startPoint; i < arrLength; i++) {
    if (target === arr[i]) count++;
  }

  return count;
};
