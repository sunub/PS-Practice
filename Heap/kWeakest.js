const kWeakestRows = function (mat, k) {
  const result = [];
  for (let i = 0; i <= mat[0].length; i++) {
    for (let j = 0; j < mat.length; j++) {
      if (mat[j][i] === 0 && (i === 0 || mat[j][i - 1] === 1)) {
        result.push(j);
      }
      if (i === mat[0].length && mat[j][i - 1] === 1) {
        result.push(j);
      }
      if (result.length === k) {
        return result;
      }
    }
  }
};

const myAnswer = (mat, k) => {
  timerStart();
  const map = new Map();
  for (let i = 0; i < mat.length; i++) {
    let n = 0;
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        n++;
      }
    }
    map.set(i, n);
  }
  const array = [...map.entries()].sort((a, b) => a[1] - b[1]);
  const result = [];

  for (let i = 0; i < k; i++) {
    result.push(array[i][0]);
  }
  timerEnd();
  return result;
};
