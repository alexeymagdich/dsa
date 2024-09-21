// https://leetcode.com/problems/reverse-linked-list-ii/?envType=study-plan-v2&envId=top-interview-150

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function print(head: ListNode | null) {
  let currentNode: ListNode | null = head;

  const items: number[] = [];
  while (currentNode !== null) {
    items.push(currentNode.val);
    currentNode = currentNode.next;
  }

  console.log(items);
}

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if (!head || !head.next || left === right) {
    return head;
  }

  let currentNode: ListNode | null = head;
  let currentNodeNumber = 1;

  let nodeBeforeReverse: ListNode | null = null;
  let firstNodeOfReverse: ListNode | null = null;
  let lastNodeOfReverse: ListNode | null = null;
  let prev: ListNode | null = null;

  while (currentNode !== null && currentNodeNumber <= right) {
    if (currentNodeNumber === left) {
      firstNodeOfReverse = currentNode;
    } else if (currentNodeNumber === right) {
      lastNodeOfReverse = currentNode;
    }

    const nextNode = currentNode.next;
    if (currentNodeNumber < left) {
      nodeBeforeReverse = currentNode;
    } else if (currentNodeNumber >= left && currentNodeNumber <= right) {
      currentNode.next = prev;
      prev = currentNode;
    }

    currentNode = nextNode;
    currentNodeNumber++;

    if (lastNodeOfReverse && firstNodeOfReverse) {
      if (nodeBeforeReverse) {
        nodeBeforeReverse.next = lastNodeOfReverse;
      }

      firstNodeOfReverse.next = nextNode;
    }
  }

  if (!nodeBeforeReverse) {
    return lastNodeOfReverse;
  }

  return head;
}

export function reverseLinkedList2() {
  const node5 = new ListNode(5);
  const node4 = new ListNode(4, node5);
  const node3 = new ListNode(3, node4);
  const node2 = new ListNode(2, node3);
  const node1 = new ListNode(1, node2);

  print(node1);
  const reversed = reverseBetween(node1, 2, 4);
  print(reversed);

  // console.log('---------- AFTER ----------');
  console.log(JSON.stringify(reversed, null, 2));
}
