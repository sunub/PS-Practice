const TreeNode = {
  val: 4,
  left: {
    val: 2,
    left: { val: 1, left: null, right: null },
    right: { val: 3, left: null, right: null },
  },
  right: { val: 7, left: null, right: null },
};
const p = 2;

function myAnswer(root: any, val: any): any {
  let output: any;
  function search(node: any) {
    if (node.val === val) {
      output = Object.assign({}, node);
    }
    if (node.left !== null) {
      search(node.left);
    }
    if (node.right !== null) {
      search(node.right);
    }

    if (node.left == null && node.right == null) {
      return;
    }
  }
  search(root);
  if (output.length > 0) {
    return output[0];
  } else {
    return output;
  }
}
/**
 * timer: 0.030029296875 ms
 */

function searchBST(root: any, val: number): any {
  if (root == null) {
    return null;
  }

  if (root.val == val) {
    return root;
  }

  return searchBST(root.left, val) || searchBST(root.right, val);
}
/**
 * timer: 0.005126953125 ms
 */
