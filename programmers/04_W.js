function myAnswer(s) {
  if (s[0] === ")" && s[s.length - 1] === "(") {
    return false;
  }

  if (s.length % 2 === 0) {
    let num1 = 0;
    let num2 = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === ")" && s[i + 1] === "(") {
        return false;
      }
      if (s[i] === "(") {
        num1++;
      } else if (s[i] === ")") {
        num2++;
      }
    }
    if (num1 === s.length / 2 && num2 === s.length / 2) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function solution(s) {
  let stackCount = 0;
  for (let i = 0; i < s.length; i++) {
    stackCount += s[i] === "(" ? 1 : -1;
    if (stackCount < 0) return false;
  }
  return stackCount === 0 ? true : false;
}
