//'U':Unvisited,'V':Visited,'C':Completed i.e. All adjacent nodes are visited.
function Node(val){
    this.val = val;
    this.adjacentNodes = [];
    this.status = 'U';
}
let numCourses = 20;
let prerequisites = [[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]];

let graph = {};//It's basically Key value
let canFinishFlag;
var canFinish = function(numCourses, prerequisites) {
    canFinishFlag = true;
    graph = {};
    if(prerequisites.length){
        createGraph(prerequisites)
        let startNode = graph[Object.keys(graph)[0]];
        Object.entries(graph).forEach(data=>{
            detectCycle(data[1]);
        });
    }    
    return canFinishFlag;
};
//if there is any cycle in the graph, then we can not finish the courses. 
let detectCycle = (node) =>{
    if(node.status === 'U'){
        node.status = 'V';
        node.adjacentNodes.forEach(n =>{
            detectCycle(n);
        });
    }else if(node.status === 'V'){
        canFinishFlag = false;
        return;
    }else if(node.status === 'C') return;
    node.status = 'C';
}
//Create graph out of prerequisites. We will get directed graph
let createGraph = (prerequisites, index) =>{
    prerequisites.forEach(edge=>{
        [end, start] = edge;
        if(!graph[start])
            graph[start] = new Node(start);
        if(!graph[end])
            graph[end] = new Node(end);
        graph[start].adjacentNodes.push(graph[end]);
    });
}