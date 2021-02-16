function solution(s){
    let answer = true;
    let tempArr = [];
    if(s[0] === ")" || s[s.length - 1] === "(") answer = false;
    else {
        tempArr.push(s[0]);
        for(let i = 1; i < s.length; i ++) {
            if(tempArr[tempArr.length - 1] === "(" && s[i] === ")") {
                tempArr.pop();
            } else {
                tempArr.push(s[i]);
            }
        }
    }
    if(tempArr.length > 0) answer = false;
    return answer;
}