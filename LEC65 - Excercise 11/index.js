console.log("This is Excercise 11");

/* Question ->
Write a program to calculate factorial of a number using reduce and using for loops
6! = 6*5*4*3*2*1
*/

//answer
let num = 6;

//method1
let fact = 1;
for (let i = 6; i >= 1; i--) {
  fact *= i;
}
console.log(fact);

//method2
let a = [1, 2, 3, 4, 5, 6];
let fac = (a, b) => {
  return a * b;
};
console.log(a.reduce(fac));

//method3
function factorial(number) {
    let ar = Array.from(Array(number + 1).keys());
    console.log(ar.slice(1,));
    let c = ar.slice(1,).reduce((a, b) => {
        return a * b;
    });
    return c
}
console.log(factorial(num));
