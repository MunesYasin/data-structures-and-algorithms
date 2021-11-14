'use strict'; 
const Node = require('./node')


class Stack{
constructor(){
    this.top=null
    this.length=0
}

push(value){
    if(this.isEmpty()){
        const newNode = new Node(value)
        this.top=newNode
        this.length = this.length +1
    }else{
        const newNode = new Node(value)
        newNode.next=this.top
        this.top=newNode
        this.length = this.length +1
    }
}

pop(){
    if(this.isEmpty()){
        return 'Is empty'
    }else{
        const temp = this.top
        this.top=this.top.next
        temp.next=null
        this.length = this.length -1
        return temp.value
    }
}

peek(){
    if(this.isEmpty()){
        return 'No node'
    }else{
        return this.top.value
    }
}








isEmpty(){
    return this.length === 0
}




}


class Queue{
    constructor(){
        this.front = null
        this.rear=null
        this.length=0
    }
    enqueue(value){
if(this.isEmpty()){
    const newNode = new Node(value)
    this.front = newNode
    this.rear=newNode
    this.length = this.length + 1
}else{
    const newNode = new Node(value)
    this.rear.next=newNode
    this.rear=newNode
    this.length = this.length + 1

}
    }

    dequeue(){
        if(this.isEmpty()){
            return ' No Node'
        }
        else if(this.length === 1){
            const temp = this.front 
            this.front = this.front.next
            this.rear=this.rear.next
            temp.next = null 
            this.length = this.length - 1
             return temp.value
        }
        
        else{
            const temp = this.front
            this.front = this.front.next
            temp.next=null
            this.length = this.length - 1
             return temp.value
        }
    }


     peek(){
         if(this.isEmpty()){
             return 'No Node'
         }else{
             return this.front.value
         }
     }
    isEmpty(){
        return this.length === 0 
    }
}

class PseudoQueue extends Stack {
    constructor() {
      super();
      this.stackTwo = new Stack();
      this.front = null;
      this.rear = null;
    }

    enqueue(value) { 
      this.stackTwo.push(value); 
      if (!this.fornt) { 
        this.front = this.stackTwo.top; 
        this.rear = this.stackTwo.top; 
        this.stackTwo.top = null; 
        return;
      } else { 
        this.front.next = this.stackTwo.top; 
        this.rear = this.stackTwo.top; 
        this.stackTwo.top = null; 
      }
      return;
    }
    dequeue() { 
      if (!this.front) { 
        throw 'Can not remove from an empty pseudostack!'; 
      }
      if (this.front === this.rear) { 
        let dequeuedVal = this.front.value; 
        this.front = null; 
        this.rear = null; 
        return dequeuedVal;
      } else { 
        let dequeuedVal = this.front; 
        this.front = this.front.next;
        dequeuedVal.next=null
        return dequeuedVal.value; 
      }
    }
    peek() { 
      if (!this.front) { 
        throw 'Can not peek at an empty pseudoqueue!'; 
      } else { 
        return this.front.value; 
      }
    }
  }
  module.exports = { Stack, Queue, PseudoQueue };