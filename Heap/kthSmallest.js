const kthSmallest = (matrix, k) => {
  let n = matrix.length;
  let m = matrix[0].length;

  let l = matrix[0][0];
  let r = matrix[n - 1][m - 1];

  while (l < r) {
    let count = 0;
    let mid = Math.floor((l + r) / 2);

    for (let i = 0; i < n; i++) {
      let j = m - 1;
      while (matrix[i][j] > mid) {
        j--;
      }
      count = count + j + 1;
    }
    if (count < k) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l;
};

const myAnswer = (matrix, k) => {
  const array = [];
  for (let i = 0; i < matrix.length; i++) {
    for (const value of matrix[i]) {
      array.push(value);
    }
  }
  array.sort((a, b) => a - b);
  return array[k - 1];
};
