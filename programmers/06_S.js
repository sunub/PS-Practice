const s = 10000;

function solution(s) {
  const answer = [0, 1];
  for (let i = 2; i <= s; i++) {
    const num = (answer[i - 1] + answer[i - 2]) % 1234567;
    answer.push(num);
  }
  return answer[s];
}
