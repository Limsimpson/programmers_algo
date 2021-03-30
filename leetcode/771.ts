// 771. Jewels and Stones
function numJewelsInStones(jewels: string, stones: string): number { 
  let count:number = 0;
  for(let i = 0; i < stones.length; i ++) {
      for(let j = 0; j < jewels.length; j ++) {
          if(stones[i] === jewels[j]) count ++;
      }
  }
  return count;
};

// O(n) regex
function numJewelsInStones2(jewels: string, stones: string): number {
  let count:number = 0;
  const jewelsArray:string[] = jewels.split("");
  jewelsArray.forEach((jewel) => {
      count += (stones.match(new RegExp(jewel, "g")) || []).length
  })
  return count;
};

// O(n) faster
function numJewelsInStones3(jewels: string, stones: string): number {    
  let count:number = 0;
  for (let i = 0; i < stones.length; i ++) {
  if (jewels.search(stones[i]) !== -1) {
    count ++;
  }
}
return count; 
};