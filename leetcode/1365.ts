// 1365. How Many Numbers Are Smaller Than the Current Number
function smallerNumbersThanCurrent(nums: number[]): number[] {
  let count:number[] = [];
  
  for(let i = 0; i < nums.length; i ++) {
      count.push(0);
      for(let j = 0; j < nums.length; j ++) {
          if(i !== j) {
              if(nums[i] > nums[j]) {
                  count[i] ++;
              }
          }
      }
  }
      
  return count;
};

// Faster solution.
function smallerNumbersThanCurrent2(nums: number[]): number[] {
  const count:number[] = [...nums].sort((a, b) => a - b);
  return nums.map((num) => count.indexOf(num));
};