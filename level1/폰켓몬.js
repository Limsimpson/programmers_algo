function solution(nums) {
  let picks = [];
  nums = nums.sort((a, b) => a - b);
  picks.push(nums[nums.length - 1]);
  nums.pop();
  for(let i = nums.length - 1; i >= 0; i --) {
      if(picks.length <= nums.length / 2) {
          if(picks[picks.length - 1] === nums[i]) continue;
          else picks.push(nums[i]);
      }
  }
  return picks.length;
}