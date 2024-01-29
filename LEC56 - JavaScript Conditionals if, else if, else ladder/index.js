console.log("This is tutorial for conditional statements");

let a = 4;
let b = 3;

let count = a ** b; // ** is used for power means 4^3
console.log(count);
if(count > 18){
    
    console.log("you are adult as f#");
}
else if(count == 18){
    console.log("you are 18 as f#");
}
else{
    console.log("you are not adult as f#");
}

let c = a > b ? (a-b) : (b-a);
console.log(c);