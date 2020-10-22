const solution = (n, m) => {
  let MaxCommonMultiple = 1;

  for (let i = 2; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      MaxCommonMultiple = i;
    }
  }

  return [MaxCommonMultiple, (n * m) / MaxCommonMultiple];
};

// 다른 풀이 1 ////////////////////
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

// 다른 풀이 2 ////////////////////
const solution = (n, m) => {
  function gcdlcm(n, m) {
    var r;
    for (var nm = n * m; (r = n % m); n = m, m = r) {}
    return [m, nm / m];
  }
  return gcdlcm(n, m);
};

// 다른 풀이 3 ////////////////////
// 유클리드 호제법
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
