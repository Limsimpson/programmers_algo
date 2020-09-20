const solution = (s) => {
  let strToArr = s.split("");
  strToArr = strToArr.sort((a, b) => {
    return a < b ? 1 : -1;
  });
  return strToArr.join("");
};

// 더 간단한 풀이
// return s.split("").sort().reverse().join("");
