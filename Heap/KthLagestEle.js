var KthLargest = function (k, nums) {
  this.k = k;
  this.heap = new MinHeap();
  nums.forEach((n) => this.add(n));
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.heap.size() < this.k) {
    this.heap.offer(val);
  } else if (this.heap.peek() < val) {
    this.heap.offer(val);
    this.heap.poll();
  }
  return this.heap.peek();
};

class MinHeap {
  constructor(data = []) {
    this.data = data;
    this.comparator = (a, b) => a - b;
    this.heapify();
  }

  // O(nlog(n))
  heapify() {
    if (this.size() < 2) return;
    for (let i = 1; i < this.size(); i++) {
      this.bubbleUp(i);
    }
  }

  // O(1)
  peek() {
    if (this.size() === 0) return null;
    return this.data[0];
  }

  // O(log(n))
  offer(value) {
    this.data.push(value);
    this.bubbleUp(this.size() - 1);
  }

  // O(log(n))
  poll() {
    if (this.size() === 0) return null;
    const result = this.data[0];
    const last = this.data.pop();
    if (this.size() !== 0) {
      this.data[0] = last;
      this.bubbleDown(0);
    }
    return result;
  }

  // O(log(n))
  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // O(log(n))
  bubbleDown(index) {
    const lastIndex = this.size() - 1;
    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let findIndex = index;
      if (leftIndex <= lastIndex && this.comparator(this.data[leftIndex], this.data[findIndex]) < 0) {
        findIndex = leftIndex;
      }
      if (rightIndex <= lastIndex && this.comparator(this.data[rightIndex], this.data[findIndex]) < 0) {
        findIndex = rightIndex;
      }
      if (index !== findIndex) {
        this.swap(index, findIndex);
        index = findIndex;
      } else {
        break;
      }
    }
  }

  // O(1)
  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
  }

  // O(1)
  size() {
    return this.data.length;
  }
}

// My answer

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

  add(num) {
    this.insert(num);
    this.sort();
    this.result.push(this.sortedArray[k - 1]);
    return this.result;
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
