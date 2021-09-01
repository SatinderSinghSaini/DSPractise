
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

var buildTree = function(preorder, inorder) {
    let preorder_indx = 0;
    let arrToTree = function(left,right){
        if(left> right)
            return null;
        let root_val = preorder[preorder_indx];
        let root = new TreeNode(root_val);
        preorder_indx++;
        root.left= arrToTree(left,inorder_indx_val_map[root_val]-1);

        root.right=arrToTree(inorder_indx_val_map[root_val]+1, right);
        return root;
    }
    let inorder_indx_val_map = {};
    inorder.forEach((value,indx)=>{
        inorder_indx_val_map[value] = indx;
    });
    return arrToTree(0, inorder.length-1); 
};
console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]));