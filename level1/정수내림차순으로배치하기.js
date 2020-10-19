const solution = (n) => {
  n = n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
  return parseInt(n);
};

// 숫자 풀이 //////////////////////////////
const solution = (n) => {
  let r = 0;
  let e = 0;
  let arr = [];

  do {
    e = n % 10;
    // 정렬
    if (arr.length == 0) arr.push(e);
    else
      for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] <= e) {
          arr.splice(i, 0, e);
          break;
        }
        if (i == len - 1) arr.push(e);
      }
  } while (((n = Math.floor(n / 10)), n > 0));

  return parseInt(arr.join(""));
};
