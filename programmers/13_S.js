const arr = [1, 2, 3];

function mySolution(arr) {
  arr.sort((a, b) => a - b);
  let answer = arr[0];
  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j < Number.MAX_SAFE_INTEGER; j++) {
      const second = arr[i] * j;
      if (second % answer === 0) {
        answer = second;
        break;
      }
    }
  }
  return answer;
}

function nlcm(num) {
  return num.reduce((a, b) => (a * b) / gcd(a, b));
}

function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}
