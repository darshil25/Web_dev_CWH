const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Employee = require("./models/Employee")

mongoose.connect('mongodb://127.0.0.1:27017/company');
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
})

const getRandom = (arr) =>{
    let rno = Math.floor(Math.random()*(arr.length - 1))
    return arr[rno]
}
let rName = ["meet", "naman", "virat", "akaay"]
let rlang = ["Java", "c++", "c", "Python", "Javascript", "Rust", "Go", "C#"]
let rcity = ["Surat", "Dhari", "Amreli"]

app.get('/generate', async (req, res) => {
    //clear the prev collection
    await Employee.deleteMany({})
    //generate random data
    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            name: getRandom(rName),
            salary: Math.floor(Math.random()*1000000),
            language: getRandom(rlang),
            city: getRandom(rcity),
            isManager: Math.random() > 0.5 ? true:false
        })

        //await e.save()
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})