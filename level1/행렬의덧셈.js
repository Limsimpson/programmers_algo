const solution = (arr1, arr2) => {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let sumEl = arr1[i].map((arr1_el, arr1_idx) => {
      return arr1_el + arr2[i][arr1_idx];
    });
    answer.push(sumEl);
  }
  return answer;
};

// return arr1.map((arr1_el, arr1_i) =>
//   arr1_el.map((arr1_el_el, arr1_el_i) => arr1_el_el + arr2[arr1_i][arr1_el_i])
// );
