function solution(s) {
  const arr = s.split(" ");
  let answer = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      j % 2 === 0
        ? (answer += arr[i][j].toUpperCase())
        : (answer += arr[i][j].toLowerCase());
    }
    answer += " ";
  }
  return answer.slice(0, -1);
}
