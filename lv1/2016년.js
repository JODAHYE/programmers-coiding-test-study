function solution(a, b) {
  const date = new Date(2016, a - 1, b);
  const arr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return arr[date.getDay()];
}
