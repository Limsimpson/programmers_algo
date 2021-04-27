// 1832. Check if the Sentence Is Pangram
function checkIfPangram(sentence: string): boolean {
    if(sentence.length < 26) return false;
    let setSentence = new Set(sentence);
    return setSentence.size < 26 ? false : true;
};

// Use ascii
function checkIfPangram2 (sentence:string) {
  let expected:number = 26;
  const found:boolean[] = new Array(26);
  for (let i = 0; i < sentence.length; i += 1) {
    if (found[sentence[i].charCodeAt(0) - 97] === undefined) {
      expected -= 1;
      found[sentence[i].charCodeAt(0) - 97] = true;
    }
    if (expected === 0) {
      return true;
    }
  }
  return false;
};