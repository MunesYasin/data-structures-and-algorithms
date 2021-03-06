'use strict';

let Node = require('./list-node');

class LinkedList {
  constructor(){
    this.head = null;
  }
  static zipLists(linkedListOne, linkedListTwo) {
    let listOneCurrent = linkedListOne.head; // Step 1a
    let listTwoCurrent = linkedListTwo.head; // Step 1b
    if (!listOneCurrent) {
      const error = new Error('Linked list one is empty');
      return error; // Return the error to the user
    } else if (!listTwoCurrent) {
      const error = new Error('Linked list one is empty');
      return error; // Return the error to the user
    }

    while(listOneCurrent.next !==null) {
      if(listTwoCurrent) {
        linkedListTwo.head = listTwoCurrent.next; // Step 2a
        listTwoCurrent.next = listOneCurrent.next; // Step 2b
        listOneCurrent.next = listTwoCurrent; // Step 3
        listOneCurrent = listTwoCurrent.next; // Step 4a
        listTwoCurrent = linkedListTwo.head; // Step 4b
      } else { break; }
    }
    if (listTwoCurrent) {
      listOneCurrent.next = listTwoCurrent;
    }

    return linkedListOne.head;
  }
  kthFromEnd(k) {
    if (k < 0) { 
      const error = new Error('Passed argument must be a positive integer'); 
      return error; 
    }
    if (!this.head) { 
      const error = new Error('Can not search an empty linked list.'); 
      return error; 
    }
    let nodeCount = 0; 
    let currentNode = this.head;
    while(currentNode !== null) {
      nodeCount += 1;
      currentNode = currentNode.next;
    }
    if (k > nodeCount) { 
      const error = new Error('Search is beyond length of linked list');
      return error; 
    } else if (k === nodeCount) {
      return this.head.value;
    } else { 
      let placesFromHead = nodeCount - k;
      currentNode = this.head;
      for (let i = 0; i < (placesFromHead - 1); i++) { 
        currentNode = currentNode.next; 
      }
      return currentNode.value;
    }
  }
  append(value) {
    const node = new Node(value);
    if (!this.head) { 
      this.head = node; 
      return; 
    }
    let currentNode = this.head;
    while(currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  }

  insertBefore(value, newVal) {
    const node = new Node(newVal);
    let currentNode = this.head;

    while (currentNode !== null) { 
      if (this.head.value === value) { 
        this.insert(newVal); 
        break;
      }
      if (currentNode.next.value === value) { 
        node.next = currentNode.next; 
        currentNode.next = node; 
        break; 
      } else { 
        currentNode = currentNode.next; 
      }
    }
    if (!currentNode) {
      return new Error('Value not found in list.');
    }
  }

  insertAfter(value, newVal) {
    const node = new Node(newVal);
    if (!this.head) { 
      const error = new Error('Can not search an empty linked list.'); 
      return error; 
    }
    let currentNode = this.head; 

    while (currentNode !== null) { 
      if (currentNode.next === null) { 
        this.append(newVal); 
        break;
      }
      if (currentNode.value === value) { 
        node.next = currentNode.next; 
        currentNode.next = node; 
        break; 
      } else { 
        currentNode = currentNode.next; 
      }
    }
    if (!currentNode) {
      return new Error('Value not found in list.');
    }
  }
  insert(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    return;
  }
  includes(testValue) {
    if(!this.head) { 
      return false;
    }
    let currentNode = this.head;
    while(currentNode !== null) {
      if (currentNode.value === testValue) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  }
  toString() {
    let arrayString = '';
    let currentNode = this.head;
    if (!this.head) {
      return `NULL`;
    } else {
      arrayString = `{${this.head.value}} -> `;
    }
    while(currentNode.next !== null) {
      currentNode = currentNode.next;
      arrayString += `{${currentNode.value}} -> `;
    }
    arrayString += `NULL`;
    return arrayString;
  }
}

module.exports = LinkedList;