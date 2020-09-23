const solution = (answers) => {
  let s1 = [1, 2, 3, 4, 5];
  let s2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let records = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    answers[i] === s1[i % s1.length] && (records[0] += 1);
    answers[i] === s2[i % s2.length] && (records[1] += 1);
    answers[i] === s3[i % s3.length] && (records[2] += 1);
  }

  let indexes = [];
  let maxNum = Math.max(...records);

  for (let i = 0; i < records.length; i++) {
    if (records[i] === maxNum) {
      indexes.push(i + 1);
    }
  }
  return indexes;
};
