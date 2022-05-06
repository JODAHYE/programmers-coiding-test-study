function solution(left, right) {
  let answer = 0;
  let num = left;
  while (num <= right) {
    if (getCount(num) % 2 === 0) {
      answer += num;
    } else {
      answer -= num;
    }
    num++;
  }
  return answer;
}

function getCount(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) count++;
  }
  return count;
}

// 다른사람 풀이: 제곱근이 정수이면 약수의 개수가 홀수이다.
