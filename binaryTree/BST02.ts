const root = {
  val: 2,
  left: 2,
  right: 2,
};

function isValidBST(root: any) {
  function DFS(node: any, min: any, max: any): any {
    /**
     * 끝까지 탐색 했을 경우
     */
    if (!node) return true;

    /**
     * 조건에 부합하지 않는 경우
     */
    if ((min !== null && min >= node.val) || (max !== null && max <= node.val)) {
      return false;
    }

    return DFS(node.left, min, node.val) && DFS(node.right, node.val, max);
  }
  return DFS(root.left, null, null);
}

isValidBST(root);
