const solution = (x) => {
  let numToArr = x.toString().split("").map(Number);
  let sumArr = numToArr.reduce((acc, curr) => {
      return acc + curr;
  });
  return x % sumArr === 0;
}

// 위의 식 짧은 버전 ///////////////////
// const solution = (x) => {
//   return !(x % (x + "").split("").reduce((a, b) => +b + +a ));
// }

// 숫자 풀이 /////////////////////////
// const solution = (x) => {
//   var result;
//   var ori_n = x;
//   var sum = 0;
//   while(x){
//     sum += x % 10;
//     x /= 10;
//     x = Math.floor(x);
//   }
//   if(ori_n % sum == 0)
//     result = true;
//   else
//     result = false;
//   return result;
// }