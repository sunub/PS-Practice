const print = (text) => {
  console.log(text);
};
var sortColors = function (nums) {
  let p0 = 0;
  let curr = 0;
  let p2 = nums.length - 1;

  let tmp;
  while (curr <= p2) {
    if (nums[curr] == 0) {
      tmp = nums[p0];
      nums[p0++] = nums[curr];
      nums[curr++] = tmp;
    } else if (nums[curr] == 2) {
      tmp = nums[curr];
      nums[curr] = nums[p2];
      nums[p2--] = tmp;
    } else curr++;
  }
  return nums;
};
const number = [0, 2, 2, 1, 1, 2];

print(sortColors(number));

sortColors(number);

var noConstrainAnswer = function (nums) {
  console.time();
  const inputData = [...nums];
  const inputData2 = [...nums];
  for (let i = 0; i < inputData.length; i++) {
    let min;
    for (let j = 0; j < inputData2.length; j++) {
      if (min === undefined) {
        min = inputData2[j];
      }
      if (min > inputData2[j]) {
        min = inputData2[j];
      }
    }
    inputData[i] = min;
    inputData[inputData.indexOf(min)] = inputData[i];
    inputData2.splice(inputData2.indexOf(min), 1);
  }
  console.timeEnd();
  return inputData;
};
