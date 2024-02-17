//router is used to add block of code to app so that you can add it directly

const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
    res.send('Blog home page')
})
// define the about route
router.get('/about', (req, res) => {
    res.send('About blog')
}
)
router.get('/blogpost/:slug', (req, res) => {
    res.send(`fetch the blogpost from ${req.params.slug}`)
})

module.exports = router