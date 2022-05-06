function solution(n) {
  var answer = "수";
  for (let i = 2; i <= n; i++) {
    i % 2 === 0 ? (answer += "박") : (answer += "수");
  }
  return answer;
}
// 다른사람 풀이: repeat() 사용
