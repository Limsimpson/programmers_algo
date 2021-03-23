// 1470. Shuffle the Array
function shuffle(nums: number[], n: number): number[] {
  let prev:number[] = nums.slice(0, n);
  let next:number[] = nums.slice(n, nums.length);
  let newNums:number[] = [];
  for(let i = 0; i < nums.length / 2; i ++) {
      newNums.push(prev[i]);
      newNums.push(next[i]);
  }
  return newNums;
};

// Less code
function shuffle2(nums: number[], n: number): number[] {
  let newNums:number[] = [];
  for (let i = 0; i < n; i ++) {
    newNums.push(nums[i], nums[i + n]);
  }
  return newNums;
};