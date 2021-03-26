// 1512. Number of Good Pairs
// Time O(N^2) space O(1)
function numIdenticalPairs(nums: number[]): number {
  let pairs:number = 0;
  let len:number = nums.length;
  for(let i = 0; i < len - 1; i ++) {
      for(let j = 1; j < len; j ++) {
          if(i < j && nums[i] === nums[j]) {
              pairs ++;
          }
      }
  }
  return pairs;
};

// Other solution.
function numIdenticalPairs2(nums: number[]): number {
  let pairs:number = 0;
  nums.forEach((num, idx) => {
      idx = nums.indexOf(num, idx + 1);
      while(idx > 0) {
          pairs ++;
          idx = nums.indexOf(num, idx + 1);
      };
  });
  return pairs;
};

// Time O(N) space O(N)
function numIdenticalPairs3(nums: number[]): number {
  const hash = {}
  let pairs:number = 0;
  nums.forEach((num, idx)=> {
      if(hash[num]) {
          pairs += hash[num]++;
      } else {
          hash[num] = 1;
      }
  })
  return pairs;
};