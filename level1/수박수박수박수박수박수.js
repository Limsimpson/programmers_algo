const solution = (n) => {
  let answer = "";
  for (let i = 0; i < n; i++) {
    answer += i % 2 === 0 ? "수" : "박";
  }
  return answer;
};

// repeat 사용
// return "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");
// return "수박".repeat(n - 1).substring(0, n);

// while 사용
function waterMelon(n) {
  var result = "";
  var x = n;
  while (n--) {
    result += (x - n) % 2 == 0 ? "박" : "수";
  }
  return result;
}

// 넣어야 할 문자가 여러개일 때 사용하면 좋을듯 charAt
function waterMelon(n) {
  var result = "";
  var wm = "수박";
  for (var i = 0; i < n; i++) {
    var index = i % 2;
    result += wm.charAt(index);
  }
  return result;
}
