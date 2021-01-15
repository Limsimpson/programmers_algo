const solution = (n) => {
    let answer = 0;
    let sum = 0;
    let idx = 1;
    for(let i = 1; i <= n; i++) {
        sum += i;
        if(sum === n) {
            answer ++;
            sum = 0;
            i = idx ++;
        } else if(sum > n) {
            sum = 0;
            i = idx ++;
        }
    }
    return answer;
}

// 수학 풀이 (빠름)
const solution = (n) => {
  let answer = 0;
  for(let i = 1; i <= n; i ++) {
    if (n % i === 0 && i % 2 === 1) answer ++;
  }
  return answer;
}