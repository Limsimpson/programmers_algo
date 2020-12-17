// 세 번째 풀이
// filter가 slice에 비해 속도가 느리다.
const solution = (array, commands) => {
  let answer = commands.map((command) => {
    const [startPos, endPos, pos] = command;

    // filter를 이용해 해당 index 사이에 있는 값들만 리턴
    let newArr = array
      .filter((el, idx) => idx >= startPos - 1 && idx <= endPos - 1)
      .sort((a, b) => a - b);

    return newArr[pos - 1];
  });

  return answer;
};

// 두 번째 풀이
const solution = (array, commands) => {
  let answer = commands.map((command) => {
    let newArr = array.slice(command[0] - 1, command[1]);
    newArr.sort((a, b) => a - b);
    return newArr[command[2] - 1];
  });

  return answer;
};

// 첫 번째 풀이
const solution = (array, commands) => {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    let newArr = array.slice(commands[i][0] - 1, commands[i][1]);
    newArr.sort((el1, el2) => {
      return el1 - el2;
    });
    answer.push(newArr[commands[i][2] - 1]);
  }
  return answer;
};
