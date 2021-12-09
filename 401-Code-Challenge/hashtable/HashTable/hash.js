'use strict';
const linkedList = require('../linkedList/linkedList')
class HashMap{
    constructor(size){
        this.size = size,
        this.map = new Array(size)
    }




  getHash (key){
    const assciSum = key.split('').reduce((p, n) => p + n.charCodeAt(0), 0);
    const withPrime = assciSum * 599;
    return withPrime % this.size; // 0-10, 0-1024
  }

   set(key ,value){
       const hash = this.getHash(key)
    const entry = {[key] :value}




  if(!this.map[hash]){
      this.map[hash]=new linkedList()
  }


   this.map[hash].add(entry)

   }


  get(key){
      const hash = this.getHash(key)
      return this.map[hash].contain(key)
  }


  contain(key){
    const hash = this.getHash(key)
    if(this.map[hash]){
         return this.map[hash].exist(key)
    }else{
        return false
    }
   
}


}
module.exports = HashMap