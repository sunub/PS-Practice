const number = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function spiralOrder(matrix) {
  const spiralArray = [];
  const rowStart = 0;
  const rowEnd = matrix.length - 1;
  const colStart = 0;
  const colEnd = matrix[0].length - 1;

  while (rowStrat <= rowEnd && colStart <= colEnd) {
    for (let i = colStart; i < colEnd; i++) {
      spiralArray.push(matrix[rowStart][i]);
    }
    rowStart++;
    for (let i = rowStart; i < rowEnd; i++) {
      spiralArray.push(matrix[i][colEnd]);
    }
    colEnd--;
    if (colStart <= colEnd) {
      for (let i = colEnd; i > colStart; i--) {
        spiralArray.push(matrix[rowEnd][i]);
      }
    }
    rowEnd--;
    if (rowStart <= rowEnd) {
      for (let i = rowEnd; i > rowStart; i--) {
        spiralArray.push(matrix[i][colStart]);
      }
    }
    colStart++;
  }
}
