let arr = [3, 5, 7, 9 , 10]

//for each loop
// arr.forEach((value, index, arr) => {
//     console.log(`${value} ${index} ${arr}`); //print value, index and array for each index
// })

//for in loop
// for (const key in arr) {
//     if (Object.hasOwnProperty.call(arr, key)) {
//         const element = arr[key];
//         console.log(`${element} ${key}`);
//     }
// }

//for of loop
for (const iterator of arr) {
    console.log(iterator );
}