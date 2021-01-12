function solution(s) {
    let answer = "";
    s = s.split(" ").map((el) => Number(el));
    answer += Math.min(...s);
    answer += " ";
    answer += Math.max(...s);
    return answer;
}