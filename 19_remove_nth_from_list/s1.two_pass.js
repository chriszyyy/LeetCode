/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {

    let length = 0;
    let l = head;

    while (l) {
        length++;
        l = l.next;
    }

    if (n >= length) {
        return head.next;
    }

    l = head;
    while (length !== n + 1) {
        l = l.next;
        length--;
    }

    l.next = l.next.next;

    return head;
};
