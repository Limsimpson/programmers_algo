const solution = (n) => {
  function NumOfOne(num) {
    return num
      .toString(2)
      .split("")
      .filter((el) => el === "1").length;
  }

  let giveVal = NumOfOne(n);

  for (let i = 1; true; i++) {
    let comparisonVal = NumOfOne(n + i);

    if (giveVal === comparisonVal) {
      return n + i;
    }
  }
};
