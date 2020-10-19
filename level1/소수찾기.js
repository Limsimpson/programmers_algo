// 두 번째 풀이
const solution = (n) => {
  let sieve = [];
  let primes = [];

  for (let i = 2; i <= n; i++) {
    if (!sieve[i]) {
      primes.push(i);
      for (let j = 2 * i; j <= n; j += i) {
        sieve[j] = true;
      }
    }
  }
  return primes.length;
};

// 첫 번째 풀이//////////////////////////
const solution = (n) => {
  let answer = 0;
  let nArray = [];

  for (let i = 2; i <= n; i++) {
    nArray[i] = i;
  }

  for (let j = 2; j <= n; j++) {
    if (nArray[j] !== 0) {
      for (let k = j + j; k <= n; k = k + j) {
        nArray[k] = 0;
      }
    }
  }

  for (let z = 2; z < nArray.length; z++) {
    if (nArray[z] !== 0) {
      answer += 1;
    }
  }

  return answer;
};

// 10, 11, 12 시간 초과////////////////////////
// const solution = (n) => {
//     let answer = [];

//     for(let i = 1; i <= n; i++) {
//         let isDecimal = true;
//         for(let j = 2; j < i; j++) {
//             if(i % j === 0) {
//                 isDecimal = false;
//             }
//         }
//         isDecimal && answer.push(i);
//     }

//     return answer.length - 1;
// }
