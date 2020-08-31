function solution(participant, completion) {
  let p1 = participant.sort();
  let c1 = completion.sort();

  for (let i = 0; i < p1.length; i++) {
    if (p1[i] !== c1[i]) {
      return p1[i];
    }
  }
}
