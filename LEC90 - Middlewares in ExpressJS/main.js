const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")

app.use('/blog', blog)
var date = new Date(Date.now())
//app.use(express.static('public')) //middleware -> before sending response it will check if there is any file in public folder and if it is there then it will send that file as response

//syntaxt of middleware
//middlware - 1 -> logger for app
//so here the process is req come -> middleware1 -> middleware2 -> response send (with .get mentioned in file)
//but if we return response from middleware then it will not go to next middleware
const myLogger = function (req, res, next) {
    req.dar = " I am darshil bhai who is looking for nokri"
    fs.appendFileSync('Logs.txt', `\n${date.toString()} is a ${req.method}`) //it will create a file and write the logs in it
    console.log(`${Date.now()} is a ${req.method}`)
    //res.send('Thoda thoda dimag me ghus rela hai') //so if you want to return res from here then do not use next
    next() //if we don't use next then it will not go to next middleware means website will not work
}

app.use(myLogger)

//middleware - 2
app.use((req, res, next) => {
    console.log('mware2')
    next()
})

//process -> request come and response send but with middlware we can do some operation before sending response
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/abb', (req, res) => {
    res.send('Hello uzzerr!'+req.dar)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})