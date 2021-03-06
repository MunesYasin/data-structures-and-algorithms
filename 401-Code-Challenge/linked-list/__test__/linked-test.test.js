'use strict';


const LinkedList = require('../Linked-list');



describe('Linked List', () => {

  it('should start empty linked list', () =>{
    const list = new LinkedList();
    expect(list.head).toEqual(null);
  })

  it('inserts a node at the beginning of an empty list', ()=>{
    const list = new LinkedList();
    list.insert('game');
    expect(list.head.value).toEqual('game');
  });

  it('should point point to the first node in the list', ()=>{
    const list = new LinkedList();
    list.insert('first');
    list.insert('second');
    list.insert('third');
    expect(list.head.value).toEqual('third')
 
  });

  
  it('Should add a node at the end of the list', () => {
    const list = new LinkedList();
      list.append('one');
      list.insert('two');
      list.insert('three');
      list.append('test')
      list.insert('four');
      list.insert('five');
      expect(list.toString()).toEqual('{ five } -> { four } -> { three } -> { two } -> { one } -> { test } -> NULL');
  })
  
});