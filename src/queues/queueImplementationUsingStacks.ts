// https://leetcode.com/problems/implement-queue-using-stacks/description/

class Node {
  value: number;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  top: Node | null;
  bottom: Node | null;
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
    const newNode = new Node(value);
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

    return currentTop;
  }
}

class MyQueue {
  private s1: Stack;
  private s2: Stack;

  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  push(x: number): void {
    this.s1.push(x);
  }

  pop(): number {
    if (this.s1.length === 0 && this.s2.length === 0) {
      throw new Error('Queue is empty');
    }

    if (this.s2.length === 0) {
      while (this.s1.length !== 0) {
        this.s2.push(this.s1.pop()!.value);
      }

      return this.s2.pop()!.value;
    }

    return this.s2.pop()!.value;
  }

  peek(): number {
    if (this.empty()) {
      throw new Error('Queue is empty');
    }

    if (this.s2.length > 0) {
      return this.s2.peek()!;
    }

    const lastNodeInS1 = this.s1.bottom;
    return lastNodeInS1!.value;
  }

  empty(): boolean {
    return this.s1.length === 0 && this.s2.length === 0;
  }
}

export function queueImplementationUsingStacks() {
  const queue = new MyQueue();

  console.log(queue.empty());

  queue.push(1);
  queue.push(2);
  queue.push(3);
  queue.push(4);

  console.log(queue.peek());
  console.log(queue.empty());

  queue.pop();
  queue.pop();

  console.log(queue.peek());

  queue.pop();
  queue.pop();

  console.log(queue.empty());
}
