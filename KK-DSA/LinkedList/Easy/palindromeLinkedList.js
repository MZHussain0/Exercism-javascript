/**
 *Given the head of a singly linked list, return true if it is a 
palindrome
 or false otherwise. 
 */
//  Definition for singly-linked list.
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
var isPalindrome = function (head) {
  let str1 = (str2 = "");
  let node = head;

  while (node !== null) {
    str1 = `${str1}${node.val}`;
    str2 = `${node.val}${str2}`;
    node = node.next;
  }
  return str1 === str2;
};

const list = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));
console.log(list);

console.log(isPalindrome(list));
