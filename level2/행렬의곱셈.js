function solution(arr1, arr2) {
  const r = arr1.length;
  const c = arr2[0].length;
  const x = arr1[0].length;
  
  let answer = Array(r).fill(0).map(()=> Array(c).fill(0));
  
  for(let i = 0; i < r; i ++) {
      for(let j = 0; j < c; j ++) {
          for(let k = 0; k < x; k ++) {
              answer[i][j] += arr1[i][k] * arr2[k][j];
          }
      }
  }
  
  return answer;
}