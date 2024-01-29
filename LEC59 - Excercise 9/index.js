/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -

* ---> +

- --- > /
/ ---> **

It performs wrong operation 10% of the times
*/

console.log("Create a faulty calculator using JavaScript");

let a = Math.random()
console.log(a);
let x = 8
let y = 2
let p = '*'
if(a < 0.1){
        if(p == '+'){
            console.log(x-y);
        }
        else if(p == '*'){
            console.log(x+y);
        }
        else if(p == '/'){
            console.log(x**y);
        }
        else{
            console.log(x/y);
        }
}
else{
        if(p == '+'){
            console.log(x+y);
        }
        else if(p == '*'){
            console.log(x*y);
        }
        else if(p == '/'){
            console.log(x/y);
        }
        else{
            console.log(x-y);
        }
}




