var nums = [1, 1, 2];
var k = 5;
function removeDuplicates(nums) {
  var k = 0;
  var i = 0;
  do {
    i++;
    if (nums[i] !== nums[k]) {
      k++;
      nums[k] = nums[i];
    }
  } while (i < nums.length);
  return k;
}
removeDuplicates(nums);
