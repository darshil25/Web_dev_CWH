console.log("i will get job");

//asyncronous in js
console.log("line 1");
console.log("line 2");

setTimeout(() => {  //this is asyncronous function
    console.log("line 3");
}, 2000);

console.log("line 4");
//base on code structure execution should be line 1,2,3, 4 but due to asyncronous nature of js it will be line 1,2,4,3
//even if timeout set 0 it will still execute after line 4 bcz javascript delay no matter what time is set but if it in timeout then it skip it and execute next code

//callback function
const callback = (params) => {
    console.log(params);
    fn()
}
const fn = () => { //acess notesm to understand why use fn -> pyramind of doom
    console.log("Hello");
}
const loadScript = (src, callback) => {
    let sc = document.createElement('script');
    sc.src= src;
    sc.onload = callback("Darshil", fn);
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback); //this is asyncronous function so it will execute after line 4 and then it will execute callback function and then it will execute line 3
