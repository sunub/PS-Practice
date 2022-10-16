const TreeNode = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: { val: 3, left: null, right: null },
  },
  right: {
    val: 2,
    left: null,
    right: { val: 3, left: null, right: null },
  },
};

const isSymmetric = function (root) {
  if (!root) return true;

  const dfs = (left, right) => {
    if (!left || !right) return left === right;

    if (left.val !== right.val) {
      return false;
    }

    return dfs(left.left, right.right) && dfs(left.right, right.left);
  };

  return dfs(root.left, root.right);
};
