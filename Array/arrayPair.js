"use strict";
var PRINT = function (text) {
  console.log(text);
};
var timerStart = function () {
  console.time("timer");
};
var timerEnd = function () {
  console.timeEnd("timer");
};
// Solution
var nums = [-470, 66, -4835, -5623];
var arrayPairSum = function (nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  PRINT(nums);
  var length = nums.length / 2;
  var cur = [];
  for (var i = 0; i < length; i++) {
    var divide = nums.splice(0, 2);
    cur.push(Math.min.apply(Math, divide));
  }
  return cur.reduce(function (pv, cv) {
    return pv + cv;
  }, 0);
};
PRINT(arrayPairSum(nums));
//# sourceMappingURL=current.js.map
