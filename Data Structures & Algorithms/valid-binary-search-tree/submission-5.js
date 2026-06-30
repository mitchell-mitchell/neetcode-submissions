/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root, low=-Infinity, high=Infinity) {
        if (!root) return true
        if (root.val >= high || root.val <= low) return false

        return (
            this.isValidBST(root.left, low, root.val) && 
            this.isValidBST(root.right, root.val, high)
        )   
    }
}
