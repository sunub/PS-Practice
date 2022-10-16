"use strict";
var PRINT = function (text) {
  console.log(text);
};
var nums = [1, 2, 3, 4];
function dominantIndex(nums) {
  var max = Math.max.apply(Math, nums);
  var maxIndex = nums.indexOf(max);
  nums.splice(maxIndex, 1);
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] * 2 > max) {
      return -1;
    }
  }
  return maxIndex;
}
PRINT(dominantIndex(nums));
//# sourceMappingURL=current.js.map
