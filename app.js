// Definition for a Node.
 function Node(val, neighbors) {
     this.val = val === undefined ? 0 : val;
     this.neighbors = neighbors === undefined ? [] : neighbors;
 };
 var cloneGraph = function(node, kv = {}) {
    if(node){
        let cpNode = new Node(node.val);
        kv[cpNode.val] = cpNode;
        cpNode.neighbors = node.neighbors.map(n=> {
            if(kv[n.val])
                return kv[n.val] 
            else
                return cloneGraph(n, kv)
        });
        return cpNode;
    }else
        return null;    
};
 let node1,node2,node3,node4;
 node1 = new Node(1);
 node2 = new Node(2);
 node3 = new Node(3);
 node4 = new Node(4);
 node1.neighbors = [node2, node4]
 node2.neighbors = [node1, node3]
 node3.neighbors = [node4, node2]
 node4.neighbors = [node1, node3]
console.log(cloneGraph(node1));