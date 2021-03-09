// 1480. Running Sum of 1d Array
function runningSum(nums: number[]): number[] {
    let SumNums:number[] = [];
    let latestNum:number = nums[0];
    
    SumNums.push(nums[0]);
    
    for(let i = 1; i < nums.length; i ++) {
        latestNum += nums[i];
        SumNums.push(latestNum);
    }
    
    return SumNums;
};

// Solution using reduce
function runningSum2(nums: number[]): number[] {
    let SumNums:number[] = [];
    
    nums.reduce((acc, curr) => {
        SumNums.push(acc + curr);
        return acc + curr;
    }, 0);
    
    return SumNums;
};