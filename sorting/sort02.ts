const nums = ["102", "473", "251", "814"];
const queries = [
  [1, 1],
  [2, 3],
  [4, 2],
  [1, 2],
];

function smallestTrimmedNumbers(nums: string[], queries: number[][]) {
  const result: number[] = [];
  /**
   * What I learned from this line
   *  - the way "Array.prototype.map" works
   *  - the use of "Destructuring assignment"
   */
  for (const [k, trim] of queries) {
    const seperate: any = nums.map((val, i) => [val.slice(nums[0].length - trim), i]);

    /**
     * What I need to study
     */
    seperate.sort((a: any, b: any) => {
      if (a[0] === b[0]) {
        return a[1] - b[1];
      }
      return a[0].localeCompare(b[0]);
    });
    result.push(seperate[k - 1][1]);
  }
  return result;
}
