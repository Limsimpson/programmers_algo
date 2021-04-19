// 1번
function solution(absolutes, signs) {
  let answer = 0;
  for(let i = 0; i < absolutes.length; i ++) {
      if(signs[i] === false) {
          answer -= absolutes[i];
      } else {
          answer += absolutes[i];    
      }
  }
  return answer;
}; 

// 2번
function solution2(s) {
    let answer = 0;
    for(let i = 0; i < s.length - 1; i ++) {
        let brackets = {"(" : ")","{" : "}","[" : "]"};
        let count = s.split("").reduce((acc, curr)=>{
            if(curr === brackets[acc[acc.length - 1]]) {
                acc.pop();
            } else {
                acc.push(curr);
            }
            return acc;
        }, []);
        if(count.length === 0) answer ++; 
        if(i < s.length - 1) s = s.concat(s[0]).slice(1, s.length + 1);
    }
    return answer;
};