const fs = require('fs')
//const fs = require('fs/promises') //promises in commonJs

console.log('process started');

//fs.writeFileSync("darsh.txt", "Darshil will be a great developer.") //this is sync function
//this is async function
fs.writeFile('thum.txt', "this is different file", () => { //callback -1
    console.log('done');
    fs.readFile('thum.txt', (error, data) => { //callback -2 and this will make callback hell
        console.log(error, data.toString());
    })
})

fs.appendFile('thum.txt', ' But author is shame', (e, d) => {
    console.log(d);
})

console.log('process ended');