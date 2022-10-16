"use strict";
var PRINT = function (text) {
  console.log(text);
};
var nums = [9];
function plusOne(digits) {
  for (var i = digits.length - 1; i > -1; i--) {
    if (digits[i] == 9) {
      digits[i] = 0;
      if (i == 0) {
        digits = [1].concat(digits);
      }
    } else {
      digits[i]++;
      break;
    }
  }
  return digits;
}
PRINT(plusOne(nums));
