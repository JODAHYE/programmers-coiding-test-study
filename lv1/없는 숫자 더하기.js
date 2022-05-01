function solution(numbers) {
  const answer = numbers.reduce((acc, curr) => (acc -= curr), 45);
  return answer;
}
