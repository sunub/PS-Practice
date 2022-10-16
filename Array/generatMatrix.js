"use strict";
var PRINT = function (text) {
  console.log(text);
};
var n = 3;
function spiralOrder(n) {
  var count = 1;
  var array = new Array(n).fill(null).map(function () {
    return new Array(n).fill(null);
  });
  PRINT(array);
  var colStart = 0;
  var colEnd = n - 1;
  var rowStart = 0;
  var rowEnd = n - 1;
  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (var i = colStart; i <= colEnd; i++) {
      array[rowStart][i] = count;
      count++;
    }
    rowStart++;
    for (var i = rowStart; i <= rowEnd; i++) {
      array[i][colEnd] = count;
      count++;
    }
    colEnd--;
    if (colStart <= colEnd) {
      for (var i = colEnd; i >= colStart; i--) {
        array[rowEnd][i] = count;
        count++;
      }
    }
    rowEnd--;
    if (rowStart <= rowEnd) {
      for (var i = rowEnd; i >= rowStart; i--) {
        array[i][colStart] = count;
        count++;
      }
    }
    colStart++;
  }
  return array;
}
PRINT(spiralOrder(n));
