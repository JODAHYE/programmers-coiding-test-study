function solution(n) {
  let answer = 0;
  let num = String(n);
  for (let i = 0; i < num.length; i++) {
    answer += Number(num[i]);
  }
  return answer;
}
