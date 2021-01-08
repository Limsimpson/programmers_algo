// 유클리드 호제법을 이용한 최대 공약수 구하는 공식
// The greatest common denominator (GCD)
function gcd(w, h) {
  // modulo
  const mod = w % h;
  if (mod === 0) return h;
  return gcd(h, mod);
}

const solution = (w, h) => {
  const gcdVal = gcd(w, h);
  // 대각선을 지나는 사각형 개수 공식 : w + h - (w, h의 최대공약수)
  return w * h - (w + h - gcdVal);
};
