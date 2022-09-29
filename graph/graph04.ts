const n = 4;
const edges = [
  [1, 2],
  [3, 4],
  [5, 3],
  [4, 5],
];

function countComponents(n: number, edges: number[][]) {
  const nums = Array(n).fill(-1);

  /**
   * Union find is find the empty index in the array.
   * And fill it with the parent node of the array.
   * @returns parentNode
   */

  function find(nums: any, i: number): any {
    if (nums[i] === -1) return i;
    return find(nums, nums[i]);
  }

  /**
   * Replace the value in the array with the root node.
   */

  for (let i = 0; i < edges.length; i++) {
    const x = find(nums, edges[i][0]);
    const y = find(nums, edges[i][1]);

    if (x !== y) nums[x] = y;
  }

  return nums.filter((num) => num === -1).length;
}
