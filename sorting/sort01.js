var arr = [4, 2, 1, 3];

/**
 * This fuction must have to return an array that represents the smallest difference between the two consecutive numbers in the arr.
 * @param {number} arr
 * @returns {number[]}
 */

function minimumAbsDifference(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  var result = [];
  var instance = new Map();
  for (var i = 0; i < arr.length - 1; i++) {
    var diff = Math.abs(arr[i] - arr[i + 1]);
    instance.set([arr[i], arr[i + 1]], diff);
  }
  var min;
  instance.forEach(function (value) {
    if (min === undefined) {
      min = value;
    }
    if (min > value) {
      min = value;
    }
  });
  instance.forEach(function (value, key) {
    if (value <= min) {
      result.push(key);
    }
  });
  return result;
}
