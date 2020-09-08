const solution = (arr) => {
  if (arr.length <= 1) {
    arr = [-1];
  } else {
    let findMinIdx = arr.indexOf(Math.min.apply(null, arr));
    arr.splice(findMinIdx, 1);
  }
  return arr;
};

// Math.min(...arr);
// arr.reduce((a, b) => Math.min(a, b));
// arr.filter((el) => el !== min);
