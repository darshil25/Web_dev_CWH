let arr = [3, 5, 7, 9 , 10]

//map
let newArr = arr.map(e => { //for single parameter no need to write in ()
    return e ** 2;
})

console.log(newArr);

//filter - it will return those element whose condition is true
const greaTer = (e) => {
    if(e > 7){
        return true;
    }
    return false;
}

console.log(arr.filter(greaTer));

//reduce - it will return single value
const red = (a, b) => {
    return a*b;
}
console.log(arr.reduce(red));
//steps => 3*5 = 15, 15*7 = 105, 105*9 = 945, 945*10 = 9450

//from - it will convert any object to array
let p = "bhabu moshay jindagi moti jivo"
console.log(Array.from(p));