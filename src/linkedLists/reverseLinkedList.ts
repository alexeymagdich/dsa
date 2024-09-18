// https://leetcode.com/problems/reverse-linked-list/description/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseListRecursively(head: ListNode | null): ListNode | null {
  const nextNode = head?.next;
  if (!nextNode) {
    return head;
  }

  const newHead = reverseListRecursively(nextNode);

  nextNode.next = head;
  head.next = null;

  return newHead;
}

// 1 -> 2 -> 3 -> 4 -> null
// 1 -> null (prev = 1, curr = 2)
// 2 -> 1 -> null (prev = 2, curr = 3)
// 3 -> 2 -> 1 -> null (prev = 3, curr = 4)
// 4 -> 3 -> 2 -> 1 -> null (prev = 4, curr = null) temp = null
function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;

  while (curr !== null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
}

export function reverseLinkedList() {
  const node5 = new ListNode(5);
  const node4 = new ListNode(4, node5);
  const node3 = new ListNode(3, node4);
  const node2 = new ListNode(2, node3);
  const node1 = new ListNode(1, node2);

  console.log('---------- BEFORE ----------');
  console.log(JSON.stringify(node1, null, 2));

  const result = reverseListRecursively(node1);

  console.log('---------- AFTER ----------');
  console.log(JSON.stringify(result, null, 2));
}
