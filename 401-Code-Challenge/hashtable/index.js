'use strict';

const hashMap = require('./HashTable/hash')

const myHash = new hashMap(10)


myHash.set('mishmish', 'getHash');
myHash.set('boogie', 'boogie');
myHash.set('🍕', '🍕');
myHash.set('nimnim', 'nimnim');
myHash.set('namlah', 'namlah');
myHash.set('🦝', '🦝');

myHash.map.forEach(data => {
     console.log(data);
  });

 console.log (myHash.get("mishmish"))
 console.log (myHash.contain("mishmish"))

console.log(myHash)