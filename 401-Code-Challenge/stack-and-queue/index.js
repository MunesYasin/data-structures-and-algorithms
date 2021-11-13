'use strict'

const Stack = require('./Stack')
const Queue = require('./Queue')

/*const newstack = new Stack()

newstack.push(1)
newstack.push(2)

newstack.push(3)

newstack.push(4)

newstack.push(5)

console.log(newstack)*/


const newQueue = new Queue()

newQueue.enqueue(1)
newQueue.enqueue(2)
newQueue.dequeue()
newQueue.dequeue()

console.log(newQueue)