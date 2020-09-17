const solution = (n, arr1, arr2) => {
  let bitwise = arr1.map((el, idx) => {
    return el | arr2[idx];
  });

  bitwise = bitwise.map((el) => el.toString(2));
  bitwise = bitwise.map((el) => {
    if (el.length !== n) {
      let elLength = n - el.length;
      for (let zero_i = 0; zero_i < elLength; zero_i++) {
        el = "0" + el;
      }
    }
    return el;
  });

  bitwise = bitwise.map((el) => {
    el = el.replace(/1/g, "#");
    el = el.replace(/0/g, " ");
    return el;
  });

  return bitwise;
};

// 엄청나게 간단한 풀이
// const addZero = (n, s) => {
//   return "0".repeat(n - s.length) + s;
// };

// function solution(n, arr1, arr2) {
//   return arr1.map((v, i) =>
//     addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, (a) =>
//       +a ? "#" : " "
//     )
//   );
// }

// es7 padStart를 이용한 풀이
// const solution = (n, arr1, arr2) =>
//   arr1.map((arr1, i) =>
//     (arr1 | arr2[i])
//       .toString(2)
//       .padStart(n, 0)
//       .replace(/0/g, " ")
//       .replace(/1/g, "#")
//   );

// bitwise operator를 쓰지 않고 풀이
// function solution(n, arr1, arr2) {
//   var answer = [];
//   var a = arr1.map((v) => v.toString(2));
//   var b = arr2.map((v) => v.toString(2));

//   for (var i = 0; i < n; i++) {
//     var num = add(n, a[i], b[i]);
//     answer.push(num);
//   }
//   return answer;
// }

// function add(n, arr1, arr2) {
//   var value1 = "0".repeat(n - arr1.length) + arr1;
//   var value2 = "0".repeat(n - arr2.length) + arr2;
//   var str = "";

//   for (var i = 0; i < n; i++) {
//     str += value1[i] != "0" || value2[i] != "0" ? "#" : " ";
//   }
//   return str;
// }
