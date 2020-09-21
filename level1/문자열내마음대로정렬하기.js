function solution(strings, n) {
  strings = strings.sort((a, b) => {
    return a > b ? -1 : 1;
  });

  strings = strings.sort((a, b) => {
    return a[n] > b[n] ? 1 : -1;
  });

  return strings;
}

// 더 짧은 풀이
// return strings.sort((a, b) =>
//   a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
// );

// charAt 사용
// function solution(strings, n) {
//   return strings.sort((a, b) => {
//     const chr1 = a.charAt(n);
//     const chr2 = b.charAt(n);

//     if (chr1 == chr2) {
//       return (a > b) - (a < b);
//     } else {
//       return (chr1 > chr2) - (chr1 < chr2);
//     }
//   });
// }

// sort 한 번만 사용
// function solution(strings, n) {
//   strings.sort(function (a, b) {
//     if (a[n] > b[n]) return 1;
//     if (b[n] > a[n]) return -1;
//     if (a > b) return 1;
//     if (b > a) return -1;
//     return 0;
//   });
//   return strings;
// }
