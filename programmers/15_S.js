const N = 10;

function solution(N) {
  if (N === 1) {
    return 1;
  }
  let T = 2;
  let answer = 1;
  let i = 1;
  while (T !== N) {
    let move = Math.pow(2, i);
    if (move + T <= N) {
      T += move;
      i++;
    } else {
      T++;
      i = 0;
      answer++;
    }
  }
  return answer;
}
