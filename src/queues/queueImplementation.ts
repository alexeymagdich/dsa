class QueueNode {
  value: string;
  next: QueueNode | null;

  constructor(value: string) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  first: QueueNode | null;
  last: QueueNode | null;
  length: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    if (!this.first) {
      return null;
    }

    return this.first.value;
  }

  enqueue(value: string) {
    const newNode = new QueueNode(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last!.next = newNode;
      this.last = newNode;
    }

    this.length++;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }

    const nextFirst = this.first.next;
    this.first = nextFirst;
    this.length--;

    if (this.length === 0) {
      this.last = null;
    }
  }
}

export function queueImplementation() {
  const myQueue = new Queue();

  myQueue.enqueue('Alex');
  myQueue.enqueue('Pavel');
  myQueue.enqueue('Max');

  myQueue.dequeue();
  myQueue.enqueue('Sam');
  myQueue.dequeue();
  myQueue.dequeue();

  console.log(myQueue.peek());
}
