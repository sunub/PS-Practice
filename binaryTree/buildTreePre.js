const buildTree = function (preorder, inorder) {
  const map = new Map();

  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  const helper = (start, end) => {
    if (start > end) {
      return null;
    }
    const root = preorder.shift();
    const idx = map.get(root);
    const node = new TreeNode(root);

    node.left = helper(start, idx - 1);
    node.right = helper(idx + 1, end);
    return node;
  };
  return helper(0, inorder.length - 1);
};
