let MinHeap = function () {
  this.heap = [null];

  this.swap = (a, b) => {
    return ([this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]);
  };

  this.insert = function (num) {
    this.heap.push(num);
    if (this.heap.length > 2) {
      let idx = this.heap.length - 1;
      while (this.heap[idx] < this.heap[Math.floor(idx / 2)]) {
        this.swap(Math.floor(idx / 2), idx);

        if (Math.floor(idx / 2) > 1) {
          idx = Math.floor(idx / 2);
        } else {
          break;
        }
      }
    }
    this.sort();
  };

  this.remove = function () {
    let smallest = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);

      if (this.heap.length == 3) {
        if (this.heap[1] > this.heap[2]) {
          this.swap(1, 2);
        }
        return smallest;
      }

      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (this.heap[i] >= this.heap[left] || this.heap[i] >= this.heap[right]) {
        if (this.heap[left] < this.heap[right]) {
          this.swap(i, left);
          i = 2 * i;
        } else {
          this.swap(i, right);
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
    return smallest;
  };

  this.sort = function () {
    let result = [];
    while (this.heap.length > 1) {
      result.push(this.remove());
    }
    this.heap = [null, ...result];
    return result;
  };
};

let MaxHeap = function () {
  let heap = [null];

  this.swap = (a, b) => {
    return ([heap[a], heap[b]] = [heap[b], heap[a]]);
  };

  this.insert = function (num) {
    heap.push(num);
    if (heap.length > 2) {
      let idx = heap.length - 1;
      while (heap[Math.floor(idx / 2)] < heap[idx]) {
        this.swap(Math.floor(idx / 2), idx);

        if (Math.floor(idx / 2) > 1) {
          idx = Math.floor(idx / 2);
        } else {
          break;
        }
      }
    }
  };

  this.remove = function () {
    let biggest = heap[1];
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1];
      heap.splice(heap.length - 1);
      if (heap.length === 3) {
        if (heap[1] < heap[2]) {
          this.swap(1, 2);
        }
        return biggest;
      }

      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (heap[i] < heap[left] || heap[i] < heap[right]) {
        if (heap[left] > heap[right]) {
          this.swap(i, left);
          i = 2 * i;
        } else {
          this.swap(i, right);
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;
        if (heap[left] === undefined || heap[right] === undefined) {
          break;
        }
      }
    } else if (heap.length === 2) {
      heap.splice(1, 1);
    } else {
      return null;
    }
    return biggest;
  };
};
