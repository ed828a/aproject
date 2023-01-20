const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/', (req, res, next) => {
    // res.send('<h1>Hello from Express !</h1>')
    console.log('__dirname', __dirname)
    res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'))
    // __dirnameis a global variable which holds the absolute path of the folder where this file sitting on our operating system.
    // __dirname is dynamic
}); 

module.exports = router