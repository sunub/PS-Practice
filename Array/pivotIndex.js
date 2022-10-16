"use strict";
var PRINT = function (text) {
  console.log(text);
};
var nums = [1, 7, 3, 6, 5, 6];
function pivotIndex(nums) {
  var leftSum = 0;
  var rightSum = 0;
  for (var i = 0; i < nums.length; i++) {
    rightSum += nums[i];
  }
  for (var i = 0; i < nums.length; i++) {
    if (leftSum === rightSum - leftSum - nums[i]) {
      return i;
    } else {
      leftSum += nums[i];
    }
  }
  return -1;
}
pivotIndex(nums);
//# sourceMappingURL=current.js.map
