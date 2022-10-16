const maxDepth = function (root) {
  if (root === null) {
    return null;
  }
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  if (left > right) {
    return left + 1;
  } else {
    return right + 1;
  }
};
