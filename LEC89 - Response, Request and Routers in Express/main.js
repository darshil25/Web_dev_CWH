const express = require('express')

const blog = require('./routes/blog')
const shop = require('./routes/shop')



const app = express()
const port = 3000

app.use(express.static('public'))
app.use('/blog', blog)
app.use('/shop', shop)

//below req can be write together as app.get().post().put().delete()
app.get('/', (req, res) => {
    console.log('this is get request');
    res.send('Hello Worldd!')
})

app.post('/', (req, res) => {
    console.log('this is post request');
    res.send('Hello Worldd post!')
})

app.put('/', (req, res) => {
    console.log('this is put request');
    res.send('Hello Worldd put!')
})

app.delete('/', (req, res) => {
    console.log('this is delete request');
    res.send('Hello Worldd delete!')
})

app.get('/index', (req, res) => {
    console.log('Hy index page');
    res.sendFile('templates/file.html', { root: __dirname })
})

app.get('/api', (req, res) => {
    res.json({ a: 1, b: 2, c: 3, name: ['pakyo', 'berojgar'] })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})