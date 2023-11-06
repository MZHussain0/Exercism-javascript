class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const mergeTwoLists = (list1, list2) => {
  if (!list1) return list2;
  if (!list2) return list1;
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

const list1 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, null)))
);
const list2 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, null)))
);
console.log(mergeTwoLists(list1, list2));
//////////////////////////////////////////////////////////////////////////////
const mergeTwoLists2 = (l1, l2) => {
  let tempNode = new ListNode(0, null);
  let currentNode = tempNode;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      currentNode.next = l1;
      l1 = l1.next;
    } else {
      currentNode.next = l2;
      l2 = l2.next;
    }
    currentNode = currentNode.next;
  }
  currentNode.next = l1 || l2;

  return tempNode.next;
};
console.log(mergeTwoLists2(list1, list2));
