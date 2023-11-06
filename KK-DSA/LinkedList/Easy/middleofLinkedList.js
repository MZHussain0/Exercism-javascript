class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const middleNode = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};

const list = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, null)))
);

console.log(middleNode(list));
