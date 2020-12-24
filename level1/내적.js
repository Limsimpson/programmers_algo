const solution = (a, b) => {
  return a.reduce((acc, curr, idx) => {
    return acc + curr * b[idx];
  }, 0);
};
