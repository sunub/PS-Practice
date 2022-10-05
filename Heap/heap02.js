const H = [4, 12, 2, 7, 3, 18, 20, 3, 19];
const B = 10;
const L = 2;

const furthestBuilding = (height, bricks, ladders) => {
  const length = height.length - 1;
  const min = new MinHeap();

  for (let i = 0; i < length; i++) {
    let diff = height[i + 1] - height[i];

    if (diff > 0) {
      if (ladders > 0) {
        min.insert(diff);
        ladders--;
      } else if (min.list.length > 1 ** diff > min.list[1]) {
        bricks -= min.extract();
        min.insert(diff);
      } else {
        bricks -= diff;
      }
      if (bricks < 0) {
        return i;
      }
    }
  }

  return length;
};

class MinHeap {
  constructor() {
    this.list = [null];
  }

  insert(value = []) {
    this.list.push(value);
    if (this.list.length > 2) {
      let idx = this.list.length - 1;
      let parent = idx >> 1;
      while (this.list[parent] > this.list[idx]) {
        [this.list[parent], this.list[idx]] = [this.list[idx], this.list[parent]];

        if (parent > 1) {
          idx = parent;
          parent = idx >> 1;
        } else {
          break;
        }
      }
    }
    this.sort();
  }

  swap(a, b) {
    return ([this.list[a], this.list[b]] = [this.list[b], this.list[a]]);
  }

  extract() {
    let minValue = this.list[1];
    let i = 1,
      left,
      right,
      child = this.list[2] > this.list[3] ? 3 : 2;
    if (this.list.length > 2) {
      this.list[1] = this.list.pop();
    } else {
      this.list.pop();
    }

    while (this.list[i] > this.list[child]) {
      this.swap(i, child);

      i = child;
      left = i << 1;
      right = left + 1;
      child = this.list[left] > this.list[right] ? right : left;
    }
    return minValue;
  }

  sort() {
    const a = [];
    while (this.list.length > 1) {
      a.push(this.extract());
    }
    this.list = [null, ...a];
  }
}
