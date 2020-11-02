const solution = (s) => {
  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (1 > s.length) return;
    else {
      if (s[i] === s[i + 1]) {
        s.splice(i, 2);
        i--;
      }
    }
  }

  console.log(s);

  return s.length === 0 ? 1 : 0;
};
