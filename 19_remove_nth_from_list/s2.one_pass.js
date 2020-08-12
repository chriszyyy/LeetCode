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

    const dummy = new ListNode(0);
    dummy.next = head;

    let first = dummy, sec = dummy;

    for (let i = 0; i < n + 1; i++) {
        first = first.next;
    }

    while (first) {
        first = first.next;
        sec = sec.next;
    }

    sec.next = sec.next.next;

    return dummy.next;
};
