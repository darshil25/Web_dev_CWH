// const http = require('node:http'); //import http module
// const hostname = '127.0.0.1';  //this is pattern for CommonJS module and it is default pattern and this runs synchronously

//for new pattern we have EcmaScript module pattern(ES6)

// import http from "http" //import http module in ES6 pattern and this is runs asynchronously
// const hostname = '127.0.0.1';

// const port = 3000;
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1>Hello World!!</h1>');
// });
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

//for ES6 EcmaScript
// import {a,b,c} from './ecmaES6.js' //named export
// console.log(a);
// console.log(b);
// console.log(c);

// import khk from './ecmaES6.js' //default export->here you do not have to import same name as you have exported bcz export default means it is default export and you can import it with any name
// console.log(khk);

//for CommonJS
const a = require("./common.js");
console.log(a);

//where from require is come, bcz we did not created that function, so it is automatically created by nodejs which is like this:
// (function(exports, require, module, __filename, __dirname){
//     //automaticallly this function is created by nodejs
// });