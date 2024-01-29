console.log("Tutorial on loop");

let a = 1;
//for loop 
for (let i = 1; i<= 5; i++){
    console.log(a+i);
}

//for in loop - it is used for object
let obj = {
    name: "Darshil",
    age: "21",
    status: "single"
}

for (const key in obj) {
    const element = obj[key];
    console.log(element);
}

//for of loop - it is used for array and string
let object = "Jai Shree Ram";
for (const c of object) {
    console.log(c);
}

//while loop - first check the condition and then execute the code
let i = 5;
while(i > 0){
    console.log(i);
    i--;
}

//do while loop - it first execute the code and then check the condition
let p = -1;
do {
    console.log(p);
    p--;
} while (p > 0);
