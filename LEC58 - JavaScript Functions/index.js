console.log("Tutorial about functions in JS");

function kem60(name) {
    console.log("Are " + name + " kem60?");
    console.log("tame to mota manso thai gya " + name + " bhai");
    console.log("alya taru kai nakki thyu k nai? "+ name);
}

kem60("smit");

function sum(a, b) {
    console.log(a+b);
}
sum(5, 6);
sum(3); // number + undefined = NaN

// arrow functuion
const func1 = (x) => {
    console.log("this is how arrow function looks ", x);
}
func1(3);
func1(6);
func1(10);