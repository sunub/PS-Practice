const TreeNode = {
  val: 5,
  left: {
    val: 4,
    left: { val: 11, left: 7, right: 2 },
    right: null,
  },
  right: {
    val: 8,
    left: { val: 13, left: null, right: null },
    right: { val: 4, left: null, right: 1 },
  },
};

let num = [];
var hasPathSum = function (root, targetSum) {
  const sum = function (node, targetSum, currentSum) {
    if (!node) {
      return false;
    }

    currentSum += node.val;

    if (node.left === null && node.right === null) {
      return currentSum === targetSum;
    }

    return sum(node.left, targetSum, currentSum) || sum(node.right, targetSum, currentSum);
  };
  return sum(root, targetSum, 0);
};
