//[-10,9,20,null,null,15,7];
//[2,-1]
//[9,6,-3,null,null,-6,2,null,null,2,null,-6,-6,-6]
function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val);
        this.left = (left===undefined ? null : left);
        this.right = (right===undefined ? null : right);
    }
let node1 = new TreeNode(-10);
let node2 = new TreeNode(9);
let node3 = new TreeNode(20);
let node4 = new TreeNode(15);
let node5 = new TreeNode(7);
node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;

let maxSum;
var maxPathSum = function(root) {
    maxSum = 0;
    if(root.val!==null && root.val!==undefined)
        calcMaxPathSum(root);
    return maxSum;
};

let calcMaxPathSum = (root) =>{
    let left,right;
    left = root.left ? calcMaxPathSum(root.left) : 0;
    right = root.right ? calcMaxPathSum(root.right) : 0;
    
    if(!maxSum)
        maxSum = root.val;
    else
        maxSum = Math.max(maxSum, root.val, root.val + left, root.val + right, root.val + left + right);
    return root.val + Math.max(left, right, 0);
}
console.log(maxPathSum(node1))