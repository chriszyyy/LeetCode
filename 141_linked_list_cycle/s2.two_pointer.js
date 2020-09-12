/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

    if (head == null || head.next == null) return false;

    let walker = head;
    let runner = head.next;

    while (walker !== runner) {
        if (runner == null || runner.next == null) return false;

        walker = walker.next;
        runner = runner.next.next;
    }

    return true;
};
