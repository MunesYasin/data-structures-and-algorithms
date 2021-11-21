'use strict'

const BinaryTree = require('../binaryTree')
const Node = require('../node')

describe('Max', () => {
    test('should return max', () => {
        const BT = new BinaryTree();
        BT.root =new Node(1, new Node(4, new Node(7), new Node(114)), new Node(3, new Node(9), new Node(6)));
    
       expect(BT.Max()).toEqual(114)
    })
    
})
