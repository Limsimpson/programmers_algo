// 1528. Shuffle String
function restoreString(s: string, indices: number[]): string {
  let numberingArr = indices.map((el, idx) => {
      return { num: el, char: s[idx] };
  });
  numberingArr.sort((a, b) => a.num - b.num);
  let answer = numberingArr.map((el) => { return el.char }).join("");
  return answer;
};

// Other Solution
function restoreString2(s: string, indices: number[]): string {
  let keys = {};
  indices.forEach((val, index) => keys[val] = s[index]);
  const values = Object.keys(keys).map(key => keys[key]);
  return values.join('');
};