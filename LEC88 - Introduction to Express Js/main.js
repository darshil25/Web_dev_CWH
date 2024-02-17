const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public')) //this give acess to file in public folder
//SYNTAX OF APP. METHODS:- app.get, app.post, app.put, app.delete(path, (handler))

//example of a website
app.get('/', (req, res) => {
    res.send('Padharo mare desh')
})
app.get('/about', (req, res) => {
    res.send('This is an about page')
})
app.get('/contact', (req, res) => {
    res.send('This is a contact page')
})
app.get('/blog', (req, res) => {
    res.send('This is a blog page')
})

//code will not be maintainable we make too many end points
// app.get('/blog/js', (req, res) => {
//     res.send('Namamste JS blog page')
// })
// app.get('/blog/py', (req, res) => {
//     res.send('Namamste py blog page')
// })

//so we can use slug
app.get('/blog/:slug/:sec', (req, res) => {
    //for URL :- http://localhost:3000/blog/pakyo/paik?q=wait&region=in
    console.log(req.params);
    console.log(req.query); //this is query which can be found in url after ?
    res.send(`Namaste ${req.params.slug} and ${req.params.sec} bilog page`)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})