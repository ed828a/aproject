const express = require('express') // express is a listener function

const app = express()  // expressJS os all about the middleware

app.use((req, res, next) => {

    res.send('<h1>Hello from Express !</h1>')
}); 

app.listen(3000)
