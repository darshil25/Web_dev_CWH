let arr = [3, 5, 7, 9 , 10]

console.log(`${arr} ${typeof arr}`);

console.log(arr.toString());  //convert array to string

console.log(arr.join( " ehhe ")); //replace"," with " ehhe "

console.log(arr.pop()); //give last element of array and remove it

arr.push(100, 9, 'bhau') //add element at last of array
console.log(arr);

console.log(arr.shift()); //give first element of array and remove it

arr.unshift(97, 9, 'no') //add element at first of array
console.log(arr);

delete arr[3] //delete element's value from array but it will not delete index so its value shows as undefined
console.log(arr[3]);

let brr = [3, 9, 8, 7, -1]
let crr = [4, 7, 9, 6, 90, 2]

console.log(arr.concat(brr, crr)); //concatenate two or more array

console.log(brr.sort()); //sort array in ascending order

console.log(brr.splice(1, 3)); //remove element from array from given index to given index
console.log(brr); //it will change original array

crr.splice(1, 4, 333, 666) //remove element from array from given index to given index and add given element at given index
console.log(crr);

console.log(crr.slice(1, 3)); //give element from array from given index to given index - not include last index
