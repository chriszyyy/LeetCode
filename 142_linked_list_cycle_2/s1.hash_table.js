/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    const checkedMap = new Map();
    let curr = head;

    while (curr != null) {
        if (checkedMap.has(curr)) return curr;

        checkedMap.set(curr, true);
        curr = curr.next;
    }

    return null;
};
