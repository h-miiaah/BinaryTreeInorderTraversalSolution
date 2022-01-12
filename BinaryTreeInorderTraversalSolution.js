/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    var stack = [];
    var now = root;
    var res = [];

    while (now || stack.length) {
        while (now) {
            stack.push(now);
            now = now.left;
          }
          now = stack.pop();
          res.push(now.val);
          now = now.right;
      }

      return res;

};


/*

- Initialize a stack and a result array.
- Initialize a pointer to the root node.
- Loop while the stack is not empty or the current node is not null.
- Push the current node to the stack and move the pointer to its left child.
- Loop while the current node is not null.
- Push the current node to the stack and move the pointer to its right child.


*/