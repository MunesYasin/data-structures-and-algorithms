# Code Challenge 2 

![img](Whiteboard (1).png)

## Code 

function insertShiftArray (array , num){

  let newArr =[];

  let theIndex = 0

  if(array.length % 2 === 1){

    theIndex=(array.length)/2+.5;

    return theIndex ;

  }else if(array.length % 2 === 0 ){

    theIndex = (array.length)/2

  }
 

 for (let i =0;i<=array.length;i++){

   if(i<theIndex){

     newArr[i]=array[i]

   }else if(i===theIndex){

     newArr[i]= num

   }else if(i>theIndex){

     newArr[i]=array[i-1]

   }
  
 } return newArr
 
  }