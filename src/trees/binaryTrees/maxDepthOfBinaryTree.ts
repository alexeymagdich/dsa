class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// Iterate all over the each branch
// If there is an ancestor -> go deeper (+1)
// If there are no any ancestors -> go back (+0)
// Max.max(left branch, right branch)
function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

export function maxDepthOfBinaryTree() {
  // const value1 = new TreeNode(1);
  // const value3 = new TreeNode(3);
  // const root = new TreeNode(2, value1, value3);

  const value3 = new TreeNode(3);
  const value1 = new TreeNode(1);
  const value2 = new TreeNode(2, value1, value3);

  const value11 = new TreeNode(11);
  const value10 = new TreeNode(10, null, value11);
  const value6 = new TreeNode(6);
  const value9 = new TreeNode(9, null, value10);
  const value7 = new TreeNode(7, value6, value9);

  const root = new TreeNode(4, value2, value7);

  const result = maxDepth(root);
  console.log(result);
}
