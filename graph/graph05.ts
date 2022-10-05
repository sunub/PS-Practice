function parcificAtlantic(heights: number[][]) {
  if (!heights.length) {
    return heights;
  }

  let x: number = heights[0].length;
  let y: number = heights.length;
  let ans: number[][] = [];
  let dp = new Uint8Array(x * y);

  function DFS(i: number, j: number, w: number, h: number) {
    let ij = i * x + j;
    if (dp[ij] & w || heights[i][j] < h) {
      return;
    }
    dp[ij] += w;
    h = heights[i][j];

    if (dp[ij] === 3) {
      ans.push([i, j]);
    }

    if (i + 1 < y) {
      DFS(i + 1, j, w, h);
    }

    if (i > 0) {
      DFS(i - 1, j, w, h);
    }

    if (j + 1 < x) {
      DFS(i, j + 1, w, h);
    }

    if (j > 0) {
      DFS(i, j - 1, w, h);
    }
  }

  for (let i = 0; i < y; i++) {
    DFS(i, 0, 1, heights[i][0]);
    DFS(i, x - 1, 2, heights[i][x - 1]);
  }

  for (let j = 0; j < x; j++) {
    DFS(0, j, 1, heights[0][j]);
    DFS(y - 1, j, 2, heights[y - 1][j]);
  }
  ans.sort((a, b) => {
    return a[0] - b[0];
  });

  return ans;
}
