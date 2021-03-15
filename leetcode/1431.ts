// 1431. Kids With the Greatest Number of Candies
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let answer:boolean[] = [];
  for(let i = 0; i < candies.length; i ++) {
      if(candies[i] + extraCandies >= Math.max(...candies)) {
          answer.push(true);
      } else {
          answer.push(false);
      }
  }
  return answer;
};

// Solution using map
function kidsWithCandies2(candies: number[], extraCandies: number): boolean[] {
  const max:number = Math.max(...candies);
  let answer:boolean[] = candies.map((candy:number) => (candy + extraCandies) >= max ? true : false);
  return answer;
};