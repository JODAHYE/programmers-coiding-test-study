function solution(n) {
  const arr = String(n).split("");
  const answer = Number(arr.sort((a, b) => b - a).join(""));
  return answer;
}
