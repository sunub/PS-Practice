const input = ["h", "e", "l", "l", "o"];

const reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left <= right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return;
};

const MyAnswer = function (s) {
  let ptr1 = 0;
  let ptr2 = s.length - 1;
  const length = s.length;

  const reversing = function () {
    if (length % 2 === 0) {
      if (ptr1 + 1 === ptr2) {
        [s[ptr1], s[ptr2]] = [s[ptr2], s[ptr1]];
        return;
      } else {
        [s[ptr1], s[ptr2]] = [s[ptr2], s[ptr1]];
        ptr1 += 1;
        ptr2 -= 1;
        reversing();
      }
    } else if (length % 2 === 1) {
      if (ptr1 === ptr2) {
        [s[ptr1], s[ptr2]] = [s[ptr2], s[ptr1]];
        return;
      } else {
        [s[ptr1], s[ptr2]] = [s[ptr2], s[ptr1]];
        ptr1 += 1;
        ptr2 -= 1;
        reversing();
      }
    }
  };
  reversing();
};
