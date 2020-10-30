const solution = (n, t, m, p) => {
  let number = "";
  let answer = [];

  for (let i = 0; i <= t * m; i++) {
    number += i.toString(n);
  }

  for (let i = 0; i <= number.length; i++) {
    if (i % m == p - 1) {
      answer.push(number[i]);
    }
  }

  answer = answer.splice(0, t).join("").toUpperCase();
  return answer;
};

// 시간이 더 짧은 풀이 //////////////////////////////////
function solution(n, t, m, p) {
  let answer = "",
    numbers = "",
    j = 0;

  for (let i = p - 1; answer.length < t; i += m) {
    while (numbers[i] === undefined) {
      numbers += j.toString(n).toUpperCase();

      j++;
    }

    answer += numbers[i];
  }

  return answer;
}
