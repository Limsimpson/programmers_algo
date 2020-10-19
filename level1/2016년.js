const solution = (a, b) => {
  let daysOfWeek = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  let numOfDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let sumDays = numOfDays.reduce((acc, curr, idx) => {
    if (a === 1) return 0;
    return idx + 1 < a ? acc + curr : acc + 0;
  });

  return daysOfWeek[(sumDays + b - 1) % 7];
};

// 메소드를 이용한 식
const solution = (a, b) => {
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return days[new Date(`2016-${a}-${b}`).getDay()];
};
