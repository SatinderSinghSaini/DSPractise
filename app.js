
let root;
let ALPHABET_SIZE = 26;
var WordDictionary = function(){
        this.isEndOfWord = false;
        this.children = [];
        for(let i=0; i<ALPHABET_SIZE; i++)
            this.children[i] = null;
}

WordDictionary.prototype.search = function(word){
    function dfs(level, currentNode){
        for(let i=level; i<word.length; i++){
            let index = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if(word[i] === '.') {
                for(let j=0;j<currentNode.children.length;j++){
                    if(currentNode.children[j] && dfs(i+1, currentNode.children[j]))
                        return true;                
                }
                return false;
            }
            else{
                if(!currentNode.children[index])
                return false;
            currentNode = currentNode.children[index];
            }            
        }
        return currentNode.isEndOfWord;
    }
    return dfs(0,root);
    
};
WordDictionary.prototype.addWord = function(word){
    let level;
    let currentNode = root;
    for(level =0;level < word.length; level++){
        let index = word[level].charCodeAt(0) - 'a'.charCodeAt(0);

        if(!currentNode.children[index])
            currentNode.children[index] = new WordDictionary();            
        currentNode = currentNode.children[index];
    }
    currentNode.isEndOfWord = true;
};

root = new WordDictionary();
// Input keys (use only 'a' through 'z' and lower case)
let keys = ["the", "a", "there", "answer", "any",
                 "by", "bye", "their"];
for (i = 0; i < keys.length ; i++)
    root.addWord(keys[i]);
    
console.log(root.search('the'));
console.log(root.search('their'));
console.log(root.search('a'));


