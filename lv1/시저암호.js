function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") answer += " ";
    else {
      answer += replace(s.charCodeAt(i), n);
    }
  }
  return answer;
}

function replace(c, n) {
  let result;
  if (c >= 97) {
    //소문자이면
    console.log("소문자", c, n);
    c + n > 122
      ? (result = String.fromCharCode(96 + (c + n - 122)))
      : (result = String.fromCharCode(c + n));

    console.log(result);
    return result;
  } else {
    c + n > 90
      ? (result = String.fromCharCode(64 + (c + n - 90)))
      : (result = String.fromCharCode(c + n));

    return result;
  }
}
