class LinkedListNode<T> {
  private value: T;
  private next: LinkedListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }

  public setNext(next: LinkedListNode<T> | null) {
    this.next = next;
  }

  public getNext() {
    return this.next;
  }
}

class LinkedList<T> {
  private head: LinkedListNode<T>;
  private tail: LinkedListNode<T>;
  private length: number;

  constructor(value: T) {
    this.head = new LinkedListNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  public append(value: T) {
    const newNode = new LinkedListNode(value);
    this.tail.setNext(newNode);
    this.tail = newNode;
    this.length += 1;
  }

  public prepend(value: T) {
    const newNode = new LinkedListNode(value);
    const currentHead = this.head;

    this.head = newNode;
    this.head.setNext(currentHead);
    this.length += 1;
  }

  public find(index: number) {
    if (index < 0 || index > this.length - 1) {
      throw new Error('Index value is invalid');
    }

    let currentIndex = 0;
    let currentNode: LinkedListNode<T> | null = this.head;

    while (currentIndex !== index) {
      currentNode = currentNode ? currentNode.getNext() : null;
      currentIndex++;
    }

    return currentNode;
  }

  public insert(index: number, value: T) {
    const nodeToInsertAfter = this.find(index);
    if (!nodeToInsertAfter) {
      this.append(value);
    } else {
      const newNode = new LinkedListNode(value);
      newNode.setNext(nodeToInsertAfter.getNext());
      nodeToInsertAfter.setNext(newNode);
      this.length += 1;
    }
  }

  public remove(index: number) {
    if (this.length === 1) {
      throw new Error('Cannot emptify the linked list');
    }

    if (index === 0) {
      const nextNode = this.head.getNext()!;
      this.head = nextNode;
      this.length -= 1;
      return;
    }

    const prevNode = this.find(index - 1);
    if (!prevNode) {
      return;
    }

    const nodeToDelete = prevNode.getNext();
    if (!nodeToDelete) {
      return;
    }

    this.length -= 1;
    prevNode.setNext(nodeToDelete.getNext());
    if (index === this.length - 1) {
      this.tail = prevNode;
    }
  }

  public print() {
    console.log(JSON.stringify(this, null, 2));
  }
}

export function linkedListImplementation() {
  const linkedList = new LinkedList(42);
  linkedList.prepend(1);
  linkedList.append(36);
  linkedList.append(72);
  linkedList.insert(1, 100);
  linkedList.remove(3);
  linkedList.print();
}
