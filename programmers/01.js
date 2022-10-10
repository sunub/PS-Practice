const s = "3people unFollowed me";

function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
    } else if (i === 0 || s[i - 1] === " ") {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }
  }
  return answer;
}

PRINT(solution(s));

const a = "a";
a.toUpperCase();
