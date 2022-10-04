function myAnswer(root: any, val: any): any {
  function search(node: any) {
    if (node.val < val) {
      search(node.right);
    } else if (node.left > val) {
      search(node.left);
    }

    if (node.left == null && node.right == null) {
      const output = {
        root: val,
        left: null,
        right: null,
      };
      if (node.val > val) {
        node.left = output;
        return node;
      } else if (node.right < val) {
        node.right = output;
        return node;
      }
    }
    return node;
  }
  const output = search(root);
  return output;
}

class TreeNode {
  val: number;
  left: any | null;
  right: any | null;
  constructor(val) {
    this.val = val === undefined ? 0 : val;
    this.left = null;
    this.right = null;
  }
}

function insertIntoBST(root: any | null, val: number) {
  if (!root) {
    return new TreeNode(val);
  }

  if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  } else {
    root.left = insertIntoBST(root.left, val);
  }
  return root;
}
