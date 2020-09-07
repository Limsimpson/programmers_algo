const solution = (s) => {
  let upperS = s.toUpperCase();
  let numP = upperS.split("P").length;
  let numY = upperS.split("Y").length;

  if (numP === 0 && numY === 0) {
    return true;
  } else {
    return numP === numY ? true : false;
  }
};

// 정규식 풀이
// const solution = (s) =>
//   (s.match(/p/gi) || []).length == (s.match(/y/gi) || []).length;

// p는 ++ y는 -- 로 더하고 빼는 법
// var num = 0;
// for (var i = 0; i < s.length; i++) {
//   if (s[i] === "P") num++;
//   if (s[i] === "Y") num--;
// }

// 나의 첫 풀이
// const solution = (s) => {
//   let numP = 0;
//   let numY = 0;
//   let answer = true;

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "p" || s[i] === "P") {
//       numP += 1;
//     } else if (s[i] === "y" || s[i] === "Y") {
//       numY += 1;
//     }
//   }
//   if (numP === 0 && numY === 0) {
//     answer = false;
//   } else {
//     answer = numP === numY ? true : false;
//   }
//   return answer;
// };
