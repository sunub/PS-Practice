const print = (text) => {
  console.log(text);
};

var heightChecker = function (heights) {
  console.time("answer");
  const sortedHeights = heights.slice().sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sortedHeights[i]) {
      count++;
    }
  }
  console.timeEnd("answer");
  return count;
};

const number = [5, 1, 2, 3, 4];
heightChecker(number);

// my Answer is...

const myAnswer = (nums) => {
  console.time("myAnswer1");
  const copy = [...nums];
  let notSorted = false;
  let j = 0;
  let answer = 0;
  while (1) {
    if (copy[j] > copy[j + 1]) {
      j = 0;
      notSorted = true;
    }

    if (notSorted) {
      for (let i = 0; i < copy.length - 1; i++) {
        if (copy[i] > copy[i + 1]) {
          let current = copy[i];
          copy[i] = copy[i + 1];
          copy[i + 1] = current;
        }
      }
      notSorted = false;
    }
    j++;
    if (j === copy.length) {
      break;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != copy[i]) {
      answer++;
    }
  }
  console.timeEnd("myAnswer1");
  return answer;
};

myAnswer(number);
