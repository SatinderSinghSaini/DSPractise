
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }
 let node1 = new TreeNode(1);
 let node2 = new TreeNode(2);
 let node3 = new TreeNode(3);
 let node4 = new TreeNode(4);
 let node5 = new TreeNode(5);

 let node6 = new TreeNode(6);

 node5.left = node3;
 node5.right = node6;
 node3.left = node2;
 node3.right = node4;
 node2.left = node1;
 let root = node5;
 var kthSmallest = function(root, k) {
    let inOrderArr = [];
    return inOrderTraversal(root , inOrderArr, k);
};

var inOrderTraversal = function(root, inOrderArr, k) {
    
    if(root){
        let left = inOrderTraversal(root.left, inOrderArr,k);
        if(left !== null) return left;

        inOrderArr.push(root.val);
        if(inOrderArr.length === k) return inOrderArr[k-1];

        let right = inOrderTraversal(root.right, inOrderArr, k);
        if(right !== null) return right;     
    }
    return null;
}

console.log(kthSmallest(root, 2));