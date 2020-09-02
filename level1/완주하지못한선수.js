const solution = (participant, completion) => {
  let p = participant.sort();
  let c = completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (p[i] !== c[i]) {
      return p[i];
    }
  }
};
