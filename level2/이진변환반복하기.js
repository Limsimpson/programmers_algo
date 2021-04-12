function solution(s) {
    let _s = s;
    let answer = [0, 0];
    // _s가 1보다 클 경우
    while(_s > 1) {
      // _s에 0이 있으면 제거
        let cutS = _s.replace(/[0]/gi, "");
        // 제거한 0의 개수 더하기
        answer[1] += _s.length - cutS.length;
        // 남은 길이를 2진수로 전환
        _s = (cutS.length).toString(2);
        // 횟수 추가
        answer[0]++;
    }
    return answer;
}