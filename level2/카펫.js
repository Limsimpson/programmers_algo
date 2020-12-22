// 수식을 이용한 풀이
const solution = (brown, yellow) => {
  let term = Math.sqrt(Math.pow(brown + 4, 2) / 4 - 4 * (brown + yellow));
  let w = ((brown + 4) / 2 + term) / 2;
  let h = ((brown + 4) / 2 - term) / 2;
  return [w, h];
};

// for문을 이용한 풀이
const solution = (brown, yellow) => {
  for (var h = 3; h <= (brown + yellow) / h; h++) {
    var w = Math.floor((brown + yellow) / h);
    if ((w - 2) * (h - 2) === yellow) {
      break;
    }
  }
  return [w, h];
};
