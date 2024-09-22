class StackNode {
  value: number;
  next: StackNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  top: StackNode | null;
  bottom: StackNode | null;
  length: number;

  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    if (!this.top) {
      return null;
    }

    return this.top.value;
  }

  push(value: number) {
    const newNode = new StackNode(value);
    newNode.next = this.top;
    this.top = newNode;

    if (this.length === 0) {
      this.bottom = newNode;
    }

    this.length++;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    const currentTop = this.top;
    this.top = currentTop.next;
    this.length--;

    if (this.length === 0) {
      this.bottom = null;
    }

    return currentTop.value;
  }
}

export function stackImplementation() {
  const myStack = new Stack();
  myStack.push(1);
  myStack.push(2);
  myStack.push(3);
  myStack.pop();
  myStack.pop();
  myStack.pop();
  myStack.pop();
  console.log(myStack);
}
