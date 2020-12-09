const solution = (clothes) => {
  let answer = 1;

  let kindMap = [];
  let countMap = [];

  for (let i = 0; i < clothes.length; i++) {
    let getKind = clothes[i][1];

    if (i === 0) {
      kindMap.push(clothes[i][1]);
      countMap.push(1);
    } else {
      if (kindMap.includes(getKind)) {
        countMap[kindMap.indexOf(getKind)]++;
      } else {
        kindMap.push(clothes[i][1]);
        countMap.push(1);
      }
    }
  }

  for (let j = 0; j < countMap.length; j++) {
    answer *= countMap[j] + 1;
  }

  return answer - 1;
};

// array가 아닌 object로 풀이
const solution = (clothes) => {
  let answer = 1;
  let obj = {};

  for (let arr of clothes) {
    obj[arr[1]] = (obj[arr[1]] || 0) + 1;
  }

  for (let key in obj) {
    answer *= obj[key] + 1;
  }

  return answer - 1;
};

// 간단해 보이지만 시간이 오래 걸림
const solution = (clothes) => {
  return (
    Object.values(
      clothes.reduce((obj, t) => {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        return obj;
      }, {})
    ).reduce((a, b) => a * (b + 1), 1) - 1
  );
};
