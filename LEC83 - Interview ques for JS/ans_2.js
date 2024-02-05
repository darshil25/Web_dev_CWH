/*2. The Double Trouble:
   You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them. */

  const testArray = [2, 3, 1, 5, 5, 8, 4, 4, 6, 7, 7, 9];
  let finArr = []
  finArr.push(testArray[0]*2)
  
  for(var i=1; i<testArray.length; i++){
    if(testArray[i] == testArray[i-1]){
      continue
    }
    else{
      finArr.push(testArray[i]*2)
    }
  }
  console.log(finArr);