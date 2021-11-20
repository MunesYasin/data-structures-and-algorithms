'use strict'

const Bts = require('./BinarySearchTree')
const BTS = new Bts()
BTS.add(5)
BTS.add(6)
BTS.add(4)
BTS.add(80)

console.log(BTS.contains(8))
console.log(BTS)