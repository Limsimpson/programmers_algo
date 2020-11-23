const solution = (citations) => {
  // H-index의 기본은 배열을 내림차순 정렬하는 것에서 시작한다. (위키 설명)
  // If we have the function f ordered in decreasing order
  // from the largest value to the lowest one,
  // we can compute the h-index as follows.
  let decCitations = citations.sort((a, b) => b - a);
  // 논문의 편수는 1부터 시작하기 때문에 i 는 decCitations.length 에서 시작된다.
  // 배열의 뒤(작은 수)부터 차례대로 loop를 돈다.
  // 0이 있는 이유는 H-index는 0일수도 있기 때문이다.
  for (let i = decCitations.length; i >= 0; i--) {
    // i가 0이 될 경우 0을 return.
    if (i === 0) return 0;
    // 그 외의 경우 조건에 맞을 시 i를 return.
    // 논문의 편수(i)를 줄이고 인용 횟수(decCitations[i - 1])를 늘리는 방법으로 H-index를 찾는다.
    // decCitations[i - 1]를 하는 이유는 decCitations 배열은 길이가 0부터 length - 1까지기 때문.
    // for문을 선언할 때 i에 decCitations.length - 1을 하지 않고,
    // 조건문에서 decCitations[i - 1]를 해줘야한다.
    if (decCitations[i - 1] >= i) {
      return i;
    }
  }
};
