var kClosest = function (points, k) {
  points = points.sort((a, b) => {
    return distance(a[0], a[1]) - distance(b[0], b[1]);
  });

  return points.slice(0, k);
};

const distance = (x, y) => {
  return Math.sqrt(x * x + y * y);
};

const myAnswer = (points, k) => {
  points.sort((a, b) => {
    return distance(a) - distance(b);
  });

  return points.splice(0, k);
};

function myDistance(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2));
}
