console.log("chal raha haina tu....code likh raha hu mai...");

async function dem() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(24);
    }, 1000);
  });
} 

(async function main() {
  //this is an IIFE (Immediately Invoked Function Expression)
  // let a = await dem();
  // console.log(a);
  // let b = await dem();
  // console.log(b);

  //destructuring
  //let x, y = [1,2]; //here we gwt x as undefined and y as [1,2]
  //let [x, y] = [1, 2, 7]; //here we gwt x as 1 and y as 2 and 7 is ignored
  // let [x, y, ...rest] = [1,2, 3, 4, 5, 6] //here we gwt x as 1 and y as 2 and rest as [3, 4, 5, 6] and if we did not write ... before rest then it will store only 3 in rest
  // console.log(x, y, rest);

  let obj = {
    a: 1,
    b: 2,
    c: 3, 
    d: 4,
    e: 5
  }
  // let {a, b} = obj //this line means take a and b val from obj
  // console.log(a, b);
  let {a, b, ...rest} = obj
  console.log(a, b);
})();

//spread syntax
function sum(a, b, c){
  return a + b + c;
}
let arr = [1, 2, 3];
console.log(sum(...arr)); //here ...arr means it will take 1, 2, 3 as a, b, c respectively