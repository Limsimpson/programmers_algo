const solution = (n, lost, reserve) => {
  let duplicate = reserve.filter((el, idx) => {
    return el === lost[lost.indexOf(el)];
  });

  let answer = n - lost.length + duplicate.length;

  lost = lost
    .filter((el) => {
      return el !== duplicate[duplicate.indexOf(el)];
    })
    .sort();

  reserve = reserve
    .filter((el) => {
      return el !== duplicate[duplicate.indexOf(el)];
    })
    .sort();

  for (let i = 0; i <= lost.length; i++) {
    reserve.forEach((el) => {
      if (lost[i] + 1 === el) {
        lost.splice(i, 1);
        reserve.splice(reserve.indexOf(el), 1);
        answer++;
        i--;
      } else if (lost[i] - 1 === el) {
        lost.splice(i, 1);
        reserve.splice(reserve.indexOf(el), 1);
        answer++;
        i--;
      }
    });
  }
  return answer;
};
// 7번 : 정렬, 11번 : 인덱스 초기화

// filter와 includes를 사용, filter와 find를 사용한 짧은 풀이 ///////////
// function solution(n, lost, reserve) {
//   const realLost = lost.filter((l) => !reserve.includes(l));
//   let realReserve = reserve.filter((r) => !lost.includes(r));
//   return (
//     n -
//     realLost.filter((a) => {
//       const b = realReserve.find((r) => Math.abs(r - a) <= 1);
//       if (!b) return true;
//       realReserve = realReserve.filter((r) => r !== b);
//     }).length
//   );
// }

// answer를 배열로 만든 풀이
// function solution(n, lost, reserve) {
//   const actualReserve = reserve.filter((el) => lost.indexOf(el) === -1);
//   const actualLost = lost.filter((el) => reserve.indexOf(el) === -1);

//   const set = Array.apply(undefined, new Array(n)).map((el, i) =>
//     actualLost.indexOf(i + 1) === -1 ? true : false
//   );

//   for (let hero of actualReserve) {
//     if (set[hero - 1 - 1] === false) {
//       set[hero - 1 - 1] = true;
//     } else if (set[hero - 1 + 1] === false) {
//       set[hero - 1 + 1] = true;
//     }
//   }

//   return set.filter((el) => el).length;
// }
