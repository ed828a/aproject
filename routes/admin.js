const express = require('express')
const path = require('path')

const router = express.Router()

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
    console.log("in add-product page");
    // res.send(
    //     `<body>
    //         <h1>in add-product page!</h1>
    //         <form action="/admin/add-product" method="POST">
    //             <input type="text" name="title" >
    //             <button type="submit">Add</button> 
    //         </form>
    //     </body>`
    // );
    res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'))
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router