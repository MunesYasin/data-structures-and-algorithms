'use strict';

const NewTest = require('../HashTable/hash')
const myHash = new NewTest(10)


describe('', () => {

    

    test('should ', () => {
        
     myHash.set('mishmish', 'getHash');
     myHash.set('nimnim', 'nimnim');
     myHash.set('namlah', 'namlah');
     let is =   myHash.contain("mishmish")
     expect(is).toEqual(true)
    })
    
})



