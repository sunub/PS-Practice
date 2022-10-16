const inorderTraversal = (input) => {
  const result = [];
  const preOrder = (node) => {
    if (node !== null) {
      result.push(node.val);
      node.left && preOrder(node.left);
      node.right && preOrder(node.right);
    }
  };
  preOrder(input);
  return result;
};
