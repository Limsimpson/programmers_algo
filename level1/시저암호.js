const solution = (s, n) => {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    let charToAscii = s[i].charCodeAt();

    if (charToAscii === 32) {
      answer += " ";
    } else {
      if (charToAscii >= 65 && charToAscii <= 90) {
        if (charToAscii + n > 90) {
          answer += String.fromCharCode(charToAscii + n - 26);
        } else {
          answer += String.fromCharCode(charToAscii + n);
        }
      } else if (charToAscii >= 97 && charToAscii <= 122) {
        if (charToAscii + n > 122) {
          answer += String.fromCharCode(charToAscii + n - 26);
        } else {
          answer += String.fromCharCode(charToAscii + n);
        }
      }
    }
  }
  return answer;
};

// 짧은 풀이 ///////////////////////////////////
// 설명 //////////////////////////////////////
// 2진법으로 대문자의 코드들은 1000001~1011010, 소문자는 1100001~1111010라서 앞에 2자리로 빼고는 같습니다.
// 즉, 앞의 2자리로 대소문자를, 나머지 5자리로 알파벳을 구분합니다.
// 따라서 '(c & 96(1100000))'으로 앞의 2자리만 가져와 먼저 대소문자 구분부를 빼놓습니다.
// 뒤에 남은 5자리의 수(00001~11010)를 가져오기 위해 'c % 32(100000)'를 합니다.
// a가 1부터 시작하니 나머지 계산을 위해 '- 1'을 해서 초기점을 0으로(00000~11001) 잡아줍니다.
// 그럼 0~25의 숫자 중 하나가 나오고 여기서 n만큼 더해준 뒤 26으로 나머지 계산을 하고
// 다시 아까 빼 준 1을 다시 더한 것입니다.
// result = s.replace(
//   /[a-z]/gi,
//   (c) =>
//     [
//       (c = c.charCodeAt(0)),
//       String.fromCharCode((c & 96) + (((c % 32) + n - 1) % 26) + 1),
//     ][1]
// );

// 또 다른 풀이/////////////////////////////////
// function caesar(s, n) {
//   var result = "";
//   for (var i = 0; i < s.length; i++) {
//     if (s[i] == " ") result += " ";
//     else
//       result += String.fromCharCode(
//         s.charCodeAt(i) > 90
//           ? ((s.charCodeAt(i) + n - 97) % 26) + 97
//           : ((s.charCodeAt(i) + n - 65) % 26) + 65
//       );
//   }
//   return result;
// }

// ascii를 쓰지 않은 풀이 ///////////////////////
// function solution(s, n) {
//   var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   var lower = "abcdefghijklmnopqrstuvwxyz";
//   var answer = "";
//   for (var i = 0; i < s.length; i++) {
//     var text = s[i];
//     if (text == " ") {
//       answer += " ";
//       continue;
//     }
//     var textArr = upper.includes(text) ? upper : lower;
//     var index = textArr.indexOf(text) + n;
//     if (index >= textArr.length) index -= textArr.length;
//     answer += textArr[index];
//   }
//   return answer;
// }
