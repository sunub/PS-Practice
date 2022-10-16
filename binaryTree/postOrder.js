const postorderTraversal = function (node) {
  const result = [];
  const postOrder = (data) => {
    if (node === null) {
      return null;
    } else {
      data.left && postOrder(data.left);
      data.right && postOrder(data.right);
      result.push(data.val);
    }
  };
  postOrder(node);
  return result;
};
