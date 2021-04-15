function solution(s) {
  let answer = [];
  
  s = s.replace(/{{|}}/gi, "").split('},{').map((el) => (
      el.replace(/''/gi).split(',')
  ));
  
  s = s.sort((a, b) => (a.length - b.length)).join(',').split(',');

  for(let i = 0; i < s.length; i ++) {
      if(!answer.includes(s[i])) {
          answer.push(s[i]);
      }
  }
  
  return answer.map((el) => (Number(el)));
}