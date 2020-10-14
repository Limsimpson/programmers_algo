const solution = (n) => {
  return n.toString().split("").reverse().map(Number);
};

// for문을 이용한 풀이 /////////////////////////
// const solution = (n) => {
//   let answer = [];
//   n = n.toString();
//   for (let i = 0; i < n.length; i++) {
//     answer.unshift(parseInt(n[i]));
//   }
//   return answer;
// };

// 숫자 풀이 ////////////////////////////////
// function solution(n) {
//   var arr = [];
//   do {
//     arr.push(n % 10);
//     n = Math.floor(n / 10);
//   } while (n > 0);
//   return arr;
// }
