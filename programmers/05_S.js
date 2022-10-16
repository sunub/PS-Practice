const s = 15;

function solution(s) {
  let answer = 0;
  for (let i = 1; i <= s; i++) {
    let sum = 0;
    for (let j = i; j <= s; j++) {
      sum += j;
      if (sum > s) {
        break;
      }
      if (sum === s) {
        answer++;
        break;
      }
    }
  }
  return answer;
}
