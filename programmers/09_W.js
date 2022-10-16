const line = [
  [2, -1, 4],
  [-2, -1, 4],
  [0, -1, 1],
  [5, -8, -12],
  [5, 8, 12],
];

// RunTime error happend;

function mySolution(line) {
  console.time();
  const crossPoint = [];
  for (let i = 0; i < line.length; i++) {
    let n = 0;
    for (let j = i + 1; j < line.length; j++) {
      const bottom = line[i][0] * line[j][1] - line[i][1] * line[j][0];
      const x = (line[i][1] * line[j][2] - line[i][2] * line[j][1]) / bottom;
      const y = (line[i][2] * line[j][0] - line[i][0] * line[j][2]) / bottom;

      if (isInt(x) && isInt(y)) {
        crossPoint.push([x, y]);
      }
    }
  }

  crossPoint.sort((a, b) => b[1] - a[1]);
  const height = crossPoint[0][1] - crossPoint[crossPoint.length - 1][1] + 1;
  crossPoint.sort((a, b) => b[0] - a[0]);
  const width = crossPoint[0][0] - crossPoint[crossPoint.length - 1][0] + 1;

  const stars = Array.from(Array(height), () => new Array(width).fill("."));

  crossPoint.forEach((val) => {
    const h = Math.ceil(width / 2) - 1 - val[1];
    const w = Math.ceil(width / 2) - 1 - val[0];
    stars[h][w] = "*";
  });

  const answer = [];
  stars.forEach((val) => {
    answer.push(val.join(""));
  });

  console.timeEnd();
  return answer;
}

PRINT(solution(line));

function isInt(number) {
  return Number.isInteger(number);
}

function solution(line) {
  const N = line.length;
  const INF = Number.MAX_SAFE_INTEGER;
  const crossPoints = [];
  let minX = INF;
  let minY = INF;
  let maxX = -INF;
  let maxY = -INF;

  // 계획1 - 문제에 나온 공식대로 모든 정수 교차점과 좌표의 최대/최솟값을 구합니다.
  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      const [a, b, e] = line[i];
      const [c, d, f] = line[j];

      const mod = a * d - b * c;
      if (!mod) continue; // 분모가 0인 경우 -> 서로 평행하거나 일치

      const xNumerator = b * f - e * d;
      const yNumerator = e * c - a * f;
      if (xNumerator % mod || yNumerator % mod) continue; // 정수가 아닌 교차점

      const x = xNumerator / mod;
      const y = yNumerator / mod;

      crossPoints.push([x, y]); // 교차점 추가
      minX = Math.min(minX, x); // 좌표 최대/최솟값 갱신
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    }
  }

  // 계획2 - 너비와 높이를 계산 후, 별을 찍습니다.
  const paper = [...Array(maxY - minY + 1)].map(() => [...Array(maxX - minX + 1)].map(() => "."));

  crossPoints.forEach(([x, y]) => {
    paper[maxY - y][x - minX] = "*";
  });

  return paper.map((v) => v.join(""));
}
