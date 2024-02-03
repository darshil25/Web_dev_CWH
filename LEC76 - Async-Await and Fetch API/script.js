console.log('Running......')

// function getData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

// async function getData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

// console.log('Loading Module......')

// console.log('Do something else......')

// console.log('Load Data......')
//let data = getData() //by default property of asyncronous data will be printed as order and getData() will be printed as pending, after 3.5 seconds it will be printed as fulfilled
//but if you want to wait for data to process and go to nextstep then use await/async
// console.log(data)
    
//     console.log('Process Data......')
    
//     console.log('Task 2 doing......')

//way-1 to do this -> callBack based approach
// data.then((v)=>{

    // console.log(data)
    
    // console.log('Process Data......')
    
    // console.log('Task 2 doing......')
// })

//way-2 to do this -> async/await based approach
//making another function to make code more readable

async function getData(){ //here used fetch api to get data from server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1') //used await to return promise
    let data = await x.json() //here used await to return promise to parse data from json
    console.log(data);
    return 'hell'
}

async function main(){
    console.log('Loading Module......')

console.log('Do something else......')

console.log('Load Data......')
let data = await getData()
console.log(data)
    
console.log('Process Data......')

console.log('Task 2 doing......')
}
main()