const solution = (s) => {
  let middle = Math.round(s.length / 2);
  let isEven = s.length % 2 === 0;

  return isEven ? s[middle - 1] + s[middle] : s[middle - 1];
};
