/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
    const dummyHead = new ListNode(0);
    let carry = 0;
    let currL1 = l1, currL2 = l2;
    let curr = dummyHead;

    while (currL1 || currL2) {
        let numL1 = 0, numL2 = 0;

        if (currL1) {
            numL1 = currL1.val;
            currL1 = currL1.next;
        }

        if (currL2) {
            numL2 = currL2.val;
            currL2 = currL2.next;
        }

        const sum = numL1 + numL2 + carry;
        carry = Math.floor(sum / 10);

        curr.next = new ListNode(sum % 10);

        curr = curr.next;
    }

    if (carry > 0) {
        curr.next = new ListNode(carry);
    }

    return dummyHead.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

