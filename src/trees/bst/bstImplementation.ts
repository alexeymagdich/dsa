class BSTNode {
  public left: BSTNode | null;
  public right: BSTNode | null;
  public value: number;

  constructor(value: number) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BST {
  public root: BSTNode | null;

  constructor() {
    this.root = null;
  }

  insert(value: number) {
    const newNode = new BSTNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentNode: BSTNode | null = this.root;
    while (true) {
      const insertToLeft = value < currentNode.value;
      if (insertToLeft) {
        if (currentNode.left) {
          currentNode = currentNode?.left;
        } else {
          currentNode.left = newNode;
          return;
        }
      } else {
        if (currentNode.right) {
          currentNode = currentNode?.right;
        } else {
          currentNode.right = newNode;
          return;
        }
      }
    }
  }

  lookup(value: number) {
    if (!this.root) {
      return null;
    }

    let currentNode: BSTNode | null = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      if (value < currentNode.value) {
        currentNode = currentNode?.left;
      } else {
        currentNode = currentNode?.right;
      }
    }

    return null;
  }
}

export function bstImplementation() {
  const tree = new BST();

  tree.insert(9);
  tree.insert(4);
  tree.insert(6);
  tree.insert(20);
  tree.insert(170);
  tree.insert(15);
  tree.insert(1);
  tree.insert(11);

  console.log(JSON.stringify(tree, null, 2));

  const found1 = tree.lookup(4);
  const found2 = tree.lookup(12);

  console.log({
    found1,
    found2,
  });
}
