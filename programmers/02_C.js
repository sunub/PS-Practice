const a = [1, 4, 2];
const b = [5, 4, 4];

function solution(a, b) {
  let answer = 0;
  a.sort((a, b) => b - a);
  b.sort((a, b) => b - a);
  const length = a.length;
  for (let i = 0; i < length; i++) {
    if (a[i] > b[i]) {
      let max = a.shift();
      let min = b.pop();
      answer += max * min;
    } else {
      let max = b.shift();
      let min = a.pop();
      answer += max * min;
    }
  }
  return answer;
}
