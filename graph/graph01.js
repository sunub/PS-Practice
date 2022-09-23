var isConnected = [
  [1, 0, 0, 1],
  [0, 1, 1, 0],
  [0, 1, 1, 1],
  [1, 0, 1, 1],
];
var Union = /** @class */ (function () {
  function Union(k) {
    this.disjonint = __spreadArray([], Array(k), true).map(function (_, i) {
      return i;
    });
    this.group = k;
  }
  Union.prototype.find = function (index) {
    if (this.disjonint[index] == index) return index;
    this.disjonint[index] = this.find(this.disjonint[index]);
    return this.disjonint[index];
  };
  Union.prototype.quick = function (x, y) {
    var rootX = this.find(x);
    var rootY = this.find(y);
    if (rootX !== rootY) {
      this.disjonint[rootY] = rootX;
      this.group--;
    }
  };
  return Union;
})();
function findCircleNum(isConnected) {
  var union = new Union(isConnected.length);
  for (var i = 0; i < isConnected.length; i++) {
    for (var j = 0; j < isConnected[0].length; j++) {
      if (isConnected[i][j]) {
        union.quick(i, j);
      }
    }
  }
  return union.group;
}
findCircleNum(isConnected);
