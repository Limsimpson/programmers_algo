const solution = (n, m) => {
  let answer = [0, 0];

  function multiple(num) {
    let divide = [];
    for (let i = 1; i <= num; i++) {
      divide.push(num % i === 0 && i);
    }
    return divide;
  }

  let commonMultiple = multiple(n).filter((el) => {
    return multiple(m).includes(el);
  });

  let MaxCommonMultiple = Math.max(...commonMultiple);

  answer[0] = MaxCommonMultiple;

  if (commonMultiple.length === 1) {
    answer[1] = n * m;
  } else {
    answer[1] =
      MaxCommonMultiple * (n / MaxCommonMultiple) * (m / MaxCommonMultiple);
  }

  return answer;
};

// 효율적이고 짧은 코드 ////////////////////
const solution = (n, m) => {
  function greatestCommonDivisor(n, m) {
    return m ? greatestCommonDivisor(m, n % m) : Math.abs(n);
  }

  function leastCommonMultipleOfTwo(n, m) {
    return (n * m) / greatestCommonDivisor(n, m);
  }

  function gcdlcm(n, m) {
    return [greatestCommonDivisor(n, m), leastCommonMultipleOfTwo(n, m)];
  }

  return gcdlcm(n, m);
};

// 더 짧은 코드 //////////////////////////
const solution = (n, m) => {
  function gcdlcm(n, m) {
    var r;
    // 뭐라는...건지...
    for (var nm = n * m; (r = n % m); n = m, m = r) {}
    return [m, nm / m];
  }
  return gcdlcm(n, m);
};

// 또 다른 풀이 ////////////////////////////
const solution = (n, m) => {
  function calc_gcd(n, m) {
    if (m == 0) return n;
    return n > m ? calc_gcd(m, n % m) : calc_gcd(n, m % n);
  }

  function gcdlcm(n, m) {
    let gcd = calc_gcd(n, m);
    let lcm = (n * m) / gcd;
    return [gcd, lcm];
  }

  return gcdlcm(n, m);
};
