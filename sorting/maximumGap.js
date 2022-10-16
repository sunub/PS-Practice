var nums = [3, 6, 9, 1];
function maximumGap(nums) {
  if (nums.length <= 1) {
    return 0;
  }
  nums.sort(function (a, b) {
    return a - b;
  });
  var difference = [];
  for (var i = 0; i < nums.length - 1; i++) {
    var dif = Math.abs(nums[i] - nums[i + 1]);
    difference.push(dif);
  }
  var result = Math.max.apply(Math, difference);
  return result;
}
