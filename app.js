const express = require('express') // express is a listener function

const adminRouts = require('./routes/admin')
const shopRouts = require('./routes/shop')

const app = express()  // expressJS os all about the middleware

app.use(express.urlencoded({extended: true}))

app.use('/admin', adminRouts)
app.use(shopRouts)

// catch all un-matched routes here
app.use((req, res, next) => { 
    console.log("app's __dirname", __dirname)
    res.status(404).send(`<h1>Page Not Found</h1>`)
})

app.listen(3000)
