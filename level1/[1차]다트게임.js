const solution = (dartResult) => {
  let answer = 0;
  let eachRound = dartResult.match(/[0-9]+[D|S|T][#|\*]?/g);
  let roundScore = eachRound.map((el) => {
    let number = parseInt(el.match(/[0-9]+/g));

    let type = el.match(/[D|S|T]{1}/g)[0];
    if (type === "D") type = 2;
    else if (type === "S") type = 1;
    else if (type === "T") type = 3;

    let special = el.match(/[\*|#]/g);
    if (special === null) special = 1;
    else if (special[0] === "*") special = 2;
    else if (special[0] === "#") special = -1;

    return [Math.pow(number, type), special];
  });

  for (let i = 0; i < roundScore.length; i++) {
    if (roundScore[i][1] === 2) {
      roundScore[i][0] = roundScore[i][0] * 2;
      if (1 <= i) {
        roundScore[i - 1][0] = roundScore[i - 1][0] * 2;
      }
    } else if (roundScore[i][1] === -1) {
      roundScore[i][0] = roundScore[i][0] * -1;
    }
  }

  roundScore.forEach((el) => {
    answer += el[0];
  });

  return answer;
};

// 다른 풀이 /////////////////////////////////////////
function solution(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 },
    options = { "*": 2, "#": -1, undefined: 1 };

  let darts = dartResult.match(/\d.?\D/g);
  // /\d+\D+/g와 같은 의미

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
      score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];
    // (^\d{1,}) 와 (^\d+)는 같은 의미

    if (split[3] === "*" && darts[i - 1]) darts[i - 1] *= options["*"];

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
}
