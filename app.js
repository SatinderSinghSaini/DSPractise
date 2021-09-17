
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }
 let node1 = new TreeNode(3);
 let node2 = new TreeNode(4);
 let node3 = new TreeNode(5);
 let node4 = new TreeNode(1);
 let node5 = new TreeNode(2);

 let node11 = new TreeNode(4);
 let node12 = new TreeNode(1);
 let node13 = new TreeNode(2);

 node1.left = node2;
 node1.right = node3;
 node2.left = node4;
 node2.right = node5;
 let root = node1;

 node11.left = node12;
 node11.right = node13;
 let subroot = node11;

let isIdentical = function(root, subroot){
    if(root === null && subroot === null) return true;

    if(root === null || subroot === null) return false;
    if((root.val === subroot.val))
        return isIdentical(root.left, subroot.left) && isIdentical(root.right, subroot.right);
    return false;
}


let isSubtree = function(root, subroot){
    if(subroot === null) return true;
    if(root === null) return false;
    if(isIdentical(root, subroot)) return true;

    return (isSubtree(root.left,subroot) || isSubtree(root.right, subroot));
}
console.log(isSubtree(root,subroot));