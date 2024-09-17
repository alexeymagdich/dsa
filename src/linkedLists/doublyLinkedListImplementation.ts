class LinkedListNode<T> {
  private value: T;
  private next: LinkedListNode<T> | null;
  private prev: LinkedListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }

  public setNext(next: LinkedListNode<T> | null) {
    this.next = next;
  }

  public setPrev(prev: LinkedListNode<T> | null) {
    this.prev = prev;
  }

  public getNext() {
    return this.next;
  }

  public getPrev() {
    return this.prev;
  }

  public getValue() {
    return this.value;
  }
}

class DoublyLinkedList<T> {
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
    const lastNode = this.tail;
    newNode.setPrev(lastNode);
    lastNode.setNext(newNode);
    this.tail = newNode;
    this.length += 1;
  }

  public prepend(value: T) {
    const newNode = new LinkedListNode(value);
    const currentHead = this.head;

    currentHead.setPrev(newNode);
    newNode.setNext(currentHead);

    this.head = newNode;
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

      const nextNode = nodeToInsertAfter.getNext();
      newNode.setNext(nextNode);
      if (nextNode) {
        nextNode.setPrev(newNode);
      }

      newNode.setPrev(nodeToInsertAfter);
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
      nextNode.setPrev(null);
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
    const nextNode = nodeToDelete.getNext();
    prevNode.setNext(nextNode);
    if (nextNode) {
      nextNode.setPrev(prevNode);
    }

    if (index === this.length - 1) {
      this.tail = prevNode;
    }
  }

  public print() {
    let currentNode: LinkedListNode<T> | null = this.head;
    let i = 0;

    const items = [currentNode.getValue()];
    while (i < this.length) {
      currentNode = currentNode!.getNext();
      if (currentNode) {
        items.push(currentNode!.getValue());
      }

      i++;
    }

    console.log(items);
  }
}

export function doublyLinkedListImplementation() {
  const linkedList = new DoublyLinkedList(3);
  linkedList.prepend(2);
  linkedList.append(5);
  linkedList.prepend(1);
  linkedList.insert(2, 4);
  linkedList.insert(4, 6);
  linkedList.insert(0, 1.5);
  linkedList.remove(1);
  linkedList.remove(5);
  linkedList.append(10);
  linkedList.prepend(0);
  linkedList.insert(0, 1.5);
  linkedList.remove(1);
  linkedList.remove(4);
  linkedList.insert(5, 66);
  linkedList.insert(5, 77);
  linkedList.remove(0);
  linkedList.remove(0);
  linkedList.remove(0);
  linkedList.remove(0);
  linkedList.remove(0);
  linkedList.remove(0);
  linkedList.remove(0);
  linkedList.print();
}
