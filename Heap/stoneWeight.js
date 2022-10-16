// myAnswer is better

const lastStoneWeight = (stones) => {
  timerStart();
  const maxHeap = new Heap();
  for (let stone of stones) {
    maxHeap.insert(stone);
  }
  const array = [...maxHeap.heap];
  array.splice(0, 1);
  while (array.length > 1) {
    let [y, x] = [array.shift(), array.shift()];
    if (x !== y) {
      y -= x;
      array.push(y);
      array.sort((a, b) => b - a);
    }
  }
  print(array);

  timerEnd();
  return array.length ? array[0] : 0;
};

const myAnswer = (stones) => {
  timerStart();
  const heap = new Heap();
  let array = [];
  stones.forEach((value) => {
    heap.insert(value);
  });
  for (let i = 1; i < heap.heap.length; i++) {
    array.push(heap.heap[i]);
  }
  while (array.length > 1) {
    let a = array[0];
    let b = array[1];
    array.push(a - b);
    for (let i = 0; i < 2; i++) {
      array.splice(0, 1);
    }

    array.sort((a, b) => {
      return b - a;
    });
  }

  timerEnd();
  return array;
};

class Heap {
  constructor() {
    this.heap = [null];
    this.result = [null];
  }

  insert(num) {
    this.heap.push(num);
    if (this.heap.length > 2) {
      let idx = this.heap.length - 1;
      while (this.heap[Math.floor(idx / 2)] < this.heap[idx]) {
        if (idx >= 1) {
          [this.heap[Math.floor(idx / 2)], this.heap[idx]] = [this.heap[idx], this.heap[Math.floor(idx / 2)]];

          if (Math.floor(idx / 2) > 1) {
            idx = Math.floor(idx / 2);
          } else {
            break;
          }
        }
      }
    }
  }

  remove() {
    let biggest = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);
      if (this.heap.length === 3) {
        if (this.heap[1] < this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return biggest;
      }
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;

      while (this.heap[i] <= this.heap[left] || this.heap[i] <= this.heap[right]) {
        if (this.heap[left] > this.heap[right]) {
          [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
          i = 2 * i;
        } else {
          [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;

        if (this.heap[left] === undefined || this.heap[right] === undefined) {
          break;
        }
      }
    } else if (this.heap.length === 2) {
      this.heap.splice(1, 1);
    } else {
      return null;
    }
    return biggest;
  }

  sort() {
    this.sortedArray = [];
    while (this.heap.length > 1) {
      this.sortedArray.push(this.remove());
    }
    this.heap = [null, ...this.sortedArray];
    return this.sortedArray;
  }
}

print(myAnswer(number));
