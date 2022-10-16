var number = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function findDiagonalOrder(mat) {
  var rows = mat.length;
  var cols = mat[0].length;
  var result = new Array(rows + cols - 1).fill(null).map(function () {
    return [];
  });
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      if ((i + j) % 2 === 0) {
        result[i + j].unshift(mat[i][j]);
      } else {
        result[i + j].push(mat[i][j]);
      }
    }
  }
  return result.flat();
}
PRINT(findDiagonalOrder(number));
