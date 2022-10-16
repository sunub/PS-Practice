function lowestCommonAncestor(root, p, q) {
  if (root.left == null && root.right == null) {
    return null;
  }
  var map = new Map();
  var floor = 1;
  function search(node, floor) {
    if (node.val == p || node.val == q) {
      map.set(node.val, floor);
    }
    if (node.left == null && node.right == null) {
      return null;
    }
    if (node.left == p || node.left == q) {
      map.set(node.left, floor + 1);
      return map;
    }
    if (node.right == p || node.right == q) {
      map.set(node.right, floor + 1);
      return null;
    }
    if (node.left !== null && node.right !== null) {
      search(node.left, floor + 1);
      search(node.right, floor + 1);
    }
  }
  search(root, floor);
  var result = Array.from(map.entries()).sort(function (a, b) {
    return a[1] - b[1];
  });
  return result[0][0];
}
