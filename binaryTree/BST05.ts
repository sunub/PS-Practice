const TreeNode = {
  val: 50,
  left: {
    val: 30,
    left: null,
    right: { val: 40, left: null, right: null },
  },
  right: {
    val: 70,
    left: { val: 60, left: null, right: null },
    right: { val: 80, left: null, right: null },
  },
};
const key = 50;

function deleteNode(root: any, key: number): any {
  if (!root) {
    return root;
  }

  if (root.val === key) {
    if (!root.left && !root.right) {
      return null;
    }
    if (!root.right) {
      return root.left;
    }
    const succ = inOrderSuccesor(root.right);
    root.val = succ.val;
    root.right = deleteNode(root.right, succ.val);
    return root;
  }

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  }
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  }
  return root;

  function inOrderSuccesor(node: any) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }
}
