const solution = (n) => {
  let sqrt = Math.sqrt(n);
  return Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1;
}

// 숫자 풀이 //////////////////////
const solution = (n) => {
  let answer = 0;
  let x = 0;
  
  while(x * x < n) x ++;
  
  if(x * x === n) {
      x ++;
      answer = x * x;
  } else {
      answer = -1;
  }
  
  return answer;
}