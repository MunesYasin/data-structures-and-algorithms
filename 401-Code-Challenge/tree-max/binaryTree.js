'use strict'

class BinaryTree {
    constructor(root = null){
        this.root = root
    }

    PreOrder(){
        let array =[]
        const _walk=(node)=>{
            array.push(node.value)
            if(node.left){
                _walk(node.left)
            }
            if (node.right){
                _walk(node.right)
            }
        }
        _walk(this.root)
        return array
    }

    PostOrder(){
        let array =[]
        const _walk=(node)=>{

           
            if(node.left){
                _walk(node.left)
            }
            if (node.right){
                _walk(node.right)
            } 
            array.push(node.value)
        }
        _walk(this.root)
        return array
    }

    InOrder(){
        let array =[]
        const _walk=(node)=>{
           
            if(node.left){
                _walk(node.left)
            }
              array.push(node.value)

            if (node.right){
                _walk(node.right)
            }
        }
        _walk(this.root)
        return array
    }

     Max(){
        /* let array = this.PreOrder()
        let max = array.reduce((acc,current)=>{
            if(acc>current)
            {return acc}else{
                return current
            }
        },0)
        return max*/


        let max = null;
    let currentNode = this.root;
    if (!currentNode) { 
      return null;
    } else {
      let traverseTree = currentNode => {
        if (currentNode.value > max) { max = currentNode.value; }
        if (currentNode.left) { traverseTree(currentNode.left); }
        if (currentNode.right) { traverseTree(currentNode.right); }
      };
      traverseTree(currentNode);
      return max;
    }
        }

}
module.exports=BinaryTree


