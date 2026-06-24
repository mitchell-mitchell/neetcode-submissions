/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if (head === null) return null
        let next = head.next
        let prev = null
        while (true) {
            head.next = prev
            prev = head
            if (next === null) break
            head = next
            next = next.next
        }

        return head
        
    }
}
