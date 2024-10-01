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

// 1. Iterate over each node
// 2. Swap children of this node
// 3. Go next node
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  const tempLeft = root.left;
  const tempRight = root.right;
  root.right = tempLeft;
  root.left = tempRight;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}

export function invertBinaryTree() {
  const value1 = new TreeNode(1);
  const value3 = new TreeNode(3);
  const root = new TreeNode(2, value1, value3);

  // const value3 = new TreeNode(3);
  // const value1 = new TreeNode(1);
  // const value2 = new TreeNode(2, value1, value3);

  // const value6 = new TreeNode(6);
  // const value9 = new TreeNode(9);
  // const value7 = new TreeNode(7, value6, value9);

  // const root = new TreeNode(4, value2, value7);

  // console.log(JSON.stringify(root, null, 2));

  const invertedTree = invertTree(root);
  console.log(JSON.stringify(invertedTree, null, 2));
}
