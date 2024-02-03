//promise is used to handle asynchronous operations like callbacks and timeout in javascript
//it basically pass code to promise and it will execute it and then it will return the result
console.log("this is promisess.js file");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  console.log(a);
  if (a < 0.5) {
    reject("number not supported 1");
  } else {
    setTimeout(() => {
      console.log("this is done 1");
      resolve("parappapa 1");
    }, 1000);
  }
});
// prom1.then ((a) => {
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })

let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  console.log(a);
  if (a < 0.5) {
    reject("number not supported 2");
  } else {
    setTimeout(() => {
      console.log("this is done 2");
      resolve("parappapa 2");
    }, 1000);
  }
});

// let p3 = Promise.all([prom1, prom2]); //with promise.all it will execute both promises at same time and then it will return the result
// p3.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })

let p3 = Promise.allSettled([prom1, prom2]); //with promise.allSettled it will execute both promises at same time and then it will return the result
p3.then((a) => {
  console.log(a);
}).catch((err) => {
  console.log(err);
});

//with Promise.race it will execute both promises at same time and then it will return the result of first promise that is resolved

//with Promise.any it will execute both promises at same time and then it will wait for result of pro1 and if it is resolved then it will return the result of pro1 and throw error if both are rejected

//
