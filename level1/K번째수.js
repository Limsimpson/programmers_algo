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

// commands.map을 사용해 array.filter로 찾는 방법
// command를 [sPosition, ePosition, position]으로 새로 정의한 부분이 인상적
