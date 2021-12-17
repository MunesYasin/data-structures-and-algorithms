'use strict';

const NewTest = require('../HashTable/hash')
const myHash = new NewTest(10)


describe('', () => {

    

    

    test('should ', ()=>{
       expect(myHash.repeatedWord("In a galaxy far far away")).toBe("far")


       
    })
    
    test('should ', ()=>{
        expect(myHash.repeatedWord("Taco cat ate a taco")).toBe("taco")
     })

     test('should ', ()=>{
        expect(myHash.repeatedWord("No. Try not. Do or do not. There is no try.")).toBe("no")
     })
})