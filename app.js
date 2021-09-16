/**
 * Initialize your data structure here.
 */
 let root
 var TrieNode = function(){
     this.children = [];
     this.endOfWord = false;
 }
 var Trie = function() {
     root = new TrieNode();
 };
 
 /**
  * Inserts a word into the trie. 
  * @param {string} word
  * @return {void}
  */
 
 Trie.prototype.insert = function(word) {
     let currentNode = root;
     let level;
     for(level=0;level<word.length;level++){
         let index = word[level].charCodeAt(0) - 'a'.charCodeAt(0);
         if(!currentNode.children[index])
             currentNode.children[index] = new TrieNode();
         currentNode = currentNode.children[index];
     }
     currentNode.endOfWord = true;
 };
 
 /**
  * Returns if the word is in the trie. 
  * @param {string} word
  * @return {boolean}
  */
 Trie.prototype.search = function(word) {
     let currentNode = root;
     let level;
     for(level=0; level<word.length; level++){
         let index = word[level].charCodeAt(0) - 'a'.charCodeAt(0);
         if(!currentNode.children[index]) return false;
         currentNode = currentNode.children[index];
     }
     return currentNode.endOfWord;
 };
 
 /**
  * Returns if there is any word in the trie that starts with the given prefix. 
  * @param {string} prefix
  * @return {boolean}
  */
 Trie.prototype.startsWith = function(prefix) {
     let currentNode = root;
     let level;
     for(level=0; level<prefix.length; level++){
         let index = prefix[level].charCodeAt(0) - 'a'.charCodeAt(0);
         if(!currentNode.children[index]) return false;
         currentNode = currentNode.children[index];
     }
     return true;    
 };


 let trie = new Trie();
 let keys = ["the", "a", "there", "answer", "any",
                 "by", "bye", "their"];
for (i = 0; i < keys.length ; i++)
    trie.insert(keys[i]);

console.log(root);
console.log(trie.search('the'));
console.log(trie.search('their'));
console.log(trie.search('bi'));