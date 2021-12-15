'use strict';

const NewTest = require('../HashTable/hash')
const myHash = new NewTest(10)


describe('', () => {

    

    

    test('should ', ()=>{
       expect(myHash.repeatedWord("Once upon a time, there was a brave princess who...")).toBe("a")


       
    })
    
    test('should ', ()=>{
        expect(myHash.repeatedWord("It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...")).toBe("it")
     })

     test('should ', ()=>{
        expect(myHash.repeatedWord("It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...")).toBe("summer")
     })
})
