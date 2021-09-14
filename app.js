//Trie
//Insert and search
let root;
let ALPHABET_SIZE = 26;
class TrieNode {
    constructor(){
        this.isEndOfWord = false;
        this.children = [];
        for(let i=0; i<ALPHABET_SIZE; i++)
            this.children[i] = null;
    }
}
let search = (word) =>{
    let level, currentNode = root;
    for(level=0; level<word.length; level++){
        let index = word[level].charCodeAt(0) - 'a'.charCodeAt(0);
        if(!currentNode.children[index])
            return false;
        currentNode = currentNode.children[index];
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

root = new TrieNode();
// Input keys (use only 'a' through 'z' and lower case)
let keys = ["the", "a", "there", "answer", "any",
                 "by", "bye", "their"];
for (i = 0; i < keys.length ; i++)
    insert(keys[i]);

console.log(root);
console.log(search('the'));
console.log(search('their'));
console.log(search('bi'));


