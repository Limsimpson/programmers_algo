// 1822. Sign of the Product of an Array
function arraySign(nums: number[]): number {
  if(nums.includes(0)) return 0;
  let prdt = nums.reduce((acc, curr) => acc * curr);
  return prdt > 0 ? 1 : -1;
};

// A similar solution
function arraySign2(nums: number[]): number {
  let prdt = nums.reduce((acc, curr) => acc * curr);
  return prdt ? (prdt > 0 ? 1 : -1) : 0;
};