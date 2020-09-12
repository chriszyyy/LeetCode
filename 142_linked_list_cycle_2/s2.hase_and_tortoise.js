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

    function getIntersect(head) {
        let walker = head;
        let runner = head;

        while (runner != null && runner.next != null) {
            walker = walker.next;
            runner = runner.next.next;

            if (walker == runner) return walker;
        }

        return null;
    }

    /**
     * 2 * distance(tortoise) = distance(hare) at intersection point
     */
    let intersect = getIntersect(head);

    if (!intersect) return null;

    let walker = head;
    let walker2 = intersect;

    while (walker !== walker2) {
        walker = walker.next;
        walker2 = walker2.next;
    }

    return walker;
};
