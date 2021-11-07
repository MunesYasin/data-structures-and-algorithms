'use strict';

let Node = require('./node');

class LinkedList{

  constructor(){
    this.head = null; 
  }

  insert(value){
    
    if (!value) throw new Error('Insert value error')
    let newNode = new Node(value); 
    newNode.next = this.head; 
    this.head = newNode; 

  }

  includes(value){ 
    if (!this.head) {
      return false;
    }
    let current = this.head; 
   while(current.next){
     if (current.value === value){
       return true 
     }else{
       current=current.next
     }
   }
return false

  }

  toString(){
    let current = this.head; 
    let string = [];
    while(current !== null){
      string.push(`{ ${current.value} }`);
      current = current.next;
    }
    string.push('NULL')
    return string.join(' -> ')

  }

  append(newValue) {
    if (!this.head){
     this.head = new Node(newValue);}
else{
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    let neww = new Node(newValue)
    currentNode.next = neww;
  }
}
  
}

module.exports = LinkedList;