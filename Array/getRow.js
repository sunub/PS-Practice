var rowIndex = 10;
function getRow(rowIndex) {
  var arr = [];
  arr[0] = 1;
  for (var i = 0; i < rowIndex; i++) {
    for (var j = i; j > 0; j--) {
      arr[j] = (arr[j] || 0) + arr[j - 1];
    }
    arr.push(1);
  }
  PRINT(arr);
}
PRINT("result is ".concat(getRow(rowIndex)));
