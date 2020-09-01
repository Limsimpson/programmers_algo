const solution = (numbers) => {
  let combinedNum = numbers
    .sort((x, y) => +("" + y + x) - +("" + x + y))
    .join("");
  return combinedNum <= 0 ? "0" : combinedNum.toString();
};
