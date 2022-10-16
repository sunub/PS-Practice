var numRows = 10;

("use strict");
var PRINT = function (text) {
  console.log(text);
};
var numRows = 5;
function generate(numRows) {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];
  var res = [[1], [1, 1]];
  for (var i = 2; i <= numRows - 1; i++) {
    var row = [];
    for (var j = 0; j <= i; j++) {
      if (j === 0) {
        row.push(1);
      } else if (j === i) {
        row.push(1);
      } else {
        row.push(res[i - 1][j - 1] + res[i - 1][j]);
      }
    }
    res.push(row);
  }
  return res;
}

function myAnswer(numRows) {
  console.time("timer");
  if (numRows === 1) {
    return [[1]];
  } else if (numRows === 2) {
    return [[1], [1, 1]];
  }
  var array = new Array(numRows);
  var a = 1;
  for (var i = 0; i < numRows; i++) {
    array[i] = new Array(a).fill(null);
    a++;
  }
  var count = 0;
  while (count < numRows) {
    var ptr1 = 0;
    var ptr2 = array[count].length - 1;
    var half = Math.floor(array[count].length / 2);
    var index1 = 0;
    var index2 = 1;
    var length_1 = array[count].length - 1;
    if (ptr1 === ptr2) {
      array[count] = 1;
    } else {
      array[count][ptr1] = 1;
      array[count][ptr2] = 1;
    }
    if (array[count].length % 2 === 0) {
      while (index2 < half) {
        array[count][index2] = array[count - 1][index1] + array[count - 1][index1 + 1];
        array[count][length_1 - index2] = array[count - 1][index1] + array[count - 1][index1 + 1];
        index1++;
        index2++;
      }
    }
    if (array[count].length % 2 === 1) {
      var lastHalf = Math.floor(array[count - 1].length / 2);
      array[count][half] = array[count - 1][lastHalf - 1] + array[count - 1][lastHalf];
      if (array[count].length > 3) {
        while (index2 < half) {
          array[count][index2] = array[count - 1][index1] + array[count - 1][index1 + 1];
          array[count][length_1 - index2] = array[count - 1][index1] + array[count - 1][index1 + 1];
          index1++;
          index2++;
        }
      }
    }
    count++;
  }
  array[0] = [1];
  console.timeEnd("timer");
  return array;
}
