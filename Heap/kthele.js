const number = [1, 1, 1, 2, 2, 3];
const k = 2;
const print = (text) => {
  console.log(text);
};

const topKFrequent = (nums, k) => {
  nums.sort((a, b) => {
    return a - b;
  });
  let a, b;
  let frequent = [];
  for (let i = 0; i < nums.length; i++) {
    let index = nums[i];
    if (index === nums[i + 1]) {
      a++;
    } else {
      b = a;
    }

    if (a > b) {
      frequent.push(nums[i]);
    }
  }
  print(frequent);
};
print(topKFrequent(number, k));
