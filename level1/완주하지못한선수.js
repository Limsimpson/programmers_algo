const solution = (participant, completion) => {
  // completion에 대한 새로운 mapping
  // completion[name]이 존재 하지 않으면 0을 아니면 +1을 해라
  // ["leo", "kiki", "eden"], ["eden", "kiki"]일 때
  // [ 'eden', 'kiki', eden: 1, kiki: 1 ]를 출력함
  completion.map((name) => (completion[name] = (completion[name] | 0) + 1));
  // find는 true를 주는 첫 번째 요소를 리턴함
  // !는 뒤의 값을 참 거짓으로 바꿔주는데 반대로 바꿔줌
  // 참 거짓을 판별하고 그 후 -- 처리
  // completion[name]이 false일 경우 true가 되면서 return.
  return participant.find((name) => !completion[name]--);
};

// 첫 번째 풀이
const solution = (participant, completion) => {
  let p = participant.sort();
  let c = completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (p[i] !== c[i]) {
      return p[i];
    }
  }
};
