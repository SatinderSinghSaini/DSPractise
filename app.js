
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }
 var node1 = new TreeNode(1);
 var node2 = new TreeNode(2);
 var node3 = new TreeNode(3);
 var node4 = new TreeNode(0.5);
 var node5 = new TreeNode(1.5);
 var node6 = new TreeNode(2.5);
 var node7 = new TreeNode(3.5);
 node2.left = node1;
 node2.right = node3;
 node1.left = node4;
 node1.right = node5;
 node3.left = node6;
 node3.right = node7;

//var node1 = new TreeNode(1);

  
let index = 0;
 var serialize = function(root,serilizeArr) {
     if(serilizeArr === undefined || serilizeArr === null)
        serilizeArr = [], index=0;
     if(root){
         serilizeArr.push(root.val);
         serialize(root.left, serilizeArr);
         serialize(root.right, serilizeArr);
     }        
     else
         serilizeArr.push(null);
     return serilizeArr; 
 };
 
 var deserialize = function(data) {
     if(index< data.length && data[index] !== null){
         var node = new TreeNode(data[index]);
         index++;
         node.left = deserialize(data);
         index++;
         node.right = deserialize(data);
     }else{
         node = null;
     }     
     return node;
 };

var ds = deserialize(serialize(node1));

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */