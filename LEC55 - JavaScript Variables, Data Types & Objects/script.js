console.log("f#@! this")

var a = 6;
var b = 10;
var c = "darshil";

//var @r = 10; //invalid variable name
var _p = 10; //valid variable name
var $p = 10; //valid variable name
//var 58k = 2; //invalid variable name
console.log(a+b)
console.log(a+b+c)

console.log(typeof a, typeof b, typeof c) //to check type of datatype

// var used globally so instead of using var we can use let and const
//     let and const are valid inside respective block only
//     ex : if(true){
//         let a = 10;
//         console.log(a)
//     } let a is valid inside if block only
//     if i give let a in another block then it is valid there only likewise for const

console.log(typeof null) //object - bug in js and most asked question in interview

let o = { //defining object
    name: "Darshil", // ----> key : value
    "job role": "berojgar", //if we want to give space in key then we have to use ""

}
console.log(o); //printing object
o.salary = 100000; //adding new key value pair
o.isEmployed = true;
console.log(o);
console.log("after waking from sleep");
o.salary = 0; //changing value of key
o.isEmployed = false;
console.log(o);