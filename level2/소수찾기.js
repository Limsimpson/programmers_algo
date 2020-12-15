const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  if (n === 2 || n === 3) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  let divisor = 3;
  let limit = Math.sqrt(n);
  while (limit >= divisor) {
    if (n % divisor === 0) {
      return false;
    }
    divisor += 2;
  }
  return true;
};

const getSubsets = (arr) =>
  arr.reduce(
    (subsets, value) => subsets.concat(subsets.map((set) => [value, ...set])),
    [[]]
  );

const solution = (numbers) => {
  let answer = 0;
  let flag = [];
  let subSets = [];

  let subsets = getSubsets(numbers.split(''))
    .filter((set) => set.length >= 1)
    .map((set) => parseInt(set.join('')));
  subsets = subsets.filter((el, idx) => subsets.indexOf(el) === idx);

  console.log(subsets);
  subsets.forEach((el) => {
    if (isPrime(el) === true) {
      answer++;
    }
  });

  return answer;
};
