const inOrder = function (root) {
  const result = [];

  const order = (node) => {
    if (node !== null) {
      node.left && order(node.left);
      result.push(node.val);
      node.right && order(node.right);
    }
  };
  order(root);
  return result;
};
