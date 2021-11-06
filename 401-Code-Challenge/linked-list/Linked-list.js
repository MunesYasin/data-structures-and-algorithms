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
    let current = this.head; 
    if(current.value === value){
    return true,
    current = this.head.next,
    current = current.next
    }else{
      return false
    }


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
    const newNode = new Node(newValue);
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    newNode.next = null;
  }

  insertBefore(givenValue, newValue) {
    if(this.head === null) return false;
    const newNode = new Node(newValue);
    let currentNode = this.head;
    if(currentNode.value === givenValue) {
      newNode.next = currentNode;
      newNode = this.head;
    }
    let nextNode = currentNode.next;
    while (nextNode.value !== givenValue) {
      currentNode = currentNode.next;
      nextNode = nextNode.next;
    }
    currentNode.next = newNode;
    newNode.next = nextNode;
  }
  insertAfter(givenValue, newValue) {
    if(this.head === null) return false;
    const newNode = new Node(newValue);
    let currentNode = this.head;
    let nextNode = currentNode.next;
    while(currentNode.value !== givenValue) {
      currentNode = currentNode.next;
      nextNode = nextNode.next;
    }
    currentNode.next = newNode;
    newNode.next = nextNode;
  }
}

module.exports = LinkedList;