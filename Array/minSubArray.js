var nums = [5, 1, 3, 5, 10, 7, 4, 9, 2, 8];
var target = 15;
function minSubArrayLen(target, nums) {
  var check = true;
  var left = 0;
  var sum = 0;
  var distance = Number.MAX_SAFE_INTEGER;
  for (var right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      check = false;
      distance = Math.min(distance, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  if (check) {
    return 0;
  }
  return distance;
}
PRINT(minSubArrayLen(target, nums));
