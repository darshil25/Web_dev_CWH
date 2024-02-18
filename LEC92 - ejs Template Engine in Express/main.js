const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs'); //setting up ejs template engine

app.get('/', (req, res) => {
    let siteName = "My Site"
    let siteContent = "Welcome to my site"
    let arr = [23, 6456, 23]
    res.render('index', {siteName: siteName, siteContent: siteContent, arr})
})

app.get('/blog/:slug', (req, res) => { //so for every blog post, we have to provide .html file and for large amount of blogs we can't make too much html file || so here comes solution as ejs template engine
    let blogName = "how to make Site"
    let blogContent = "Welcome to my site || Content for making sites"
    res.render('blogPost', {blogTitle: blogName, blogContent: blogContent})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})