function solution(nums) {
  let answer = 0
  let temp = []
  
  for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
      for(let k = j + 1; k < nums.length; k ++){
        let sum = nums[i] + nums[j] + nums[k];
        temp.push(sum);
      }
    }
  }
    
  for(let l = 0; l < temp.length; l ++){
    if(primeNumber(temp[l])){
      answer ++;
    }
  }
  return answer;
}

function primeNumber(nums){
  for(let i = 2; i * i <= nums; i ++){
    if(nums % i === 0) return false;
  }
  return true;
}