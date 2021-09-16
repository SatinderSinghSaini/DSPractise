/**
 * Initialize your data structure here.
 */


/** 
 * @param {string} word
 * @return {void}
 */

//let ALPHABET_SIZE = 26;

let root;

var TrieNode = function(){
    this.children = [];
    this.isEndOfWord = false;
}
var WordDictionary = function(){
        root = new TrieNode();
}

WordDictionary.prototype.search = function(word){
    function dfs(level, currentNode){
        for(let i=level; i<word.length; i++){
            let index = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if(word[i] === '.') {
                for(let j=0;j<currentNode.children.length;j++){
                    if(currentNode.children[j] && dfs(i+1, currentNode.children[j])) return true;                
                }
                return false;
            }
            else{
                if(!currentNode.children[index]) return false;
                currentNode = currentNode.children[index];
            }            
        }
        return currentNode.isEndOfWord;
    }
    return currentNode.isEndOfWord;
};
let insert = (word) =>{
    let level;
    let currentNode = root;
    for(level =0;level < word.length; level++){
        let index = word[level].charCodeAt(0) - 'a'.charCodeAt(0);
        if(!currentNode.children[index])
            currentNode.children[index] = new TrieNode();            
        currentNode = currentNode.children[index];
    }
    currentNode.isEndOfWord = true;
};


 let trie = new WordDictionary();
 let keys = ["at", "and", "an", "add"];
for (i = 0; i < keys.length ; i++)
    trie.addWord(keys[i]);

console.log(root);
console.log(trie.search('a'));
console.log(trie.search('.at'));
console.log(trie.search('bi'));