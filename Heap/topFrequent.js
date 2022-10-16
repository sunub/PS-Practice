const number = [1, 1, 1, 2, 2, 3];
const k = 2;
const print = (text) => {
  console.log(text);
};
const timerStart = () => {
  console.time("timer");
};
const timerEnd = () => {
  console.timeEnd("timer");
};

const topKFrequent = (num, k) => {
  timerStart();
  const copy = [...num];
  const map = new Map();

  copy.forEach((element) => {
    map.set(element, map.get(element) + 1 || 1);
  });
  const mapArray = [...map.entries()].sort((a, b) => b[1] - a[1]);
  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(mapArray[i][0]);
  }

  timerEnd();
  return result;
};
print(topKFrequent(number, k));
