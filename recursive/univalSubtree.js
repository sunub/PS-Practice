const answer = function (root) {
  let count = 0;
  if (!root) return count;

  const dfs = (node) => {
    if (!node) return false;
    if (!node.left && !node.right) {
      count++;
      return true;
    }

    const isLeftUni = dfs(node.left);
    const isRightUni = dfs(node.right);
    if (node.left && node.right) {
      if (isLeftUni && isRightUni && node.val === node.left.val && node.val === node.right.val) {
        count++;
        return true;
      }
      return false;
    }

    if (node.left) {
      if (isLeftUni && node.val === node.left.val) {
        count++;
        return true;
      }
      return false;
    }
    if (node.right) {
      if (isRightUni && node.val === node.right.val) {
        count++;
        return true;
      }
      return false;
    }

    return false;
  };

  dfs(root);

  return count;
};
