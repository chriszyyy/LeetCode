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
    const checkedMap = new Map();
    let curr = head;

    while (curr && curr.next) {
        if (checkedMap.has(curr)) {
            return true;
        } else {
            checkedMap.set(curr, true);
            curr = curr.next;
        }
    }

    return false;
};
