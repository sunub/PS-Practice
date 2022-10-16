const MinHeap = (arr = []) => {
  const list = arr;
  const parent = (index) => Math.floor((index - 1) / 2);
  const left = (index) => 2 * index + 1;
  const right = (index) => 2 * index + 2;

  const swap = (a, b) => {
    const temp = list[a];
    list[a] = list[b];
    list[b] = temp;
  };

  const insert = (x) => {
    list.push(x);
    let currentIndex = list.length - 1;
    let parentIndex = parent(currentIndex);
    while (list[parentIndex] > list[currentIndex]) {
      swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
      parentIndex = parent(parentIndex);
    }
  };

  const sink = (index) => {
    let minIndex = index;
    const leftIndex = left(index);
    const rightIndex = right(index);
    if (list[leftIndex] < list[minIndex]) {
      minIndex = leftIndex;
    }
    if (list[rightIndex] < list[minIndex]) {
      minIndex = rightIndex;
    }
    if (minIndex !== index) {
      swap(minIndex, index);
      sink(minIndex);
    }
  };
  const size = () => list.length;
  const extract = () => {
    swap(0, size() - 1);
    const min = list.pop();
    sink(0);
    return min;
  };
  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    sink(i);
  }
  return {
    insert,
    size,
    extract,
  };
};

/** 1: Sort TLE
 * @param {number[]} sticks
 * @return {number}
 */
const connectSticks = function (sticks) {
  const minHeap = MinHeap(sticks);
  let cost = 0;
  while (minHeap.size() >= 2) {
    const current = minHeap.extract() + minHeap.extract();
    cost += current;
    minHeap.insert(current);
  }
  return cost;
};
