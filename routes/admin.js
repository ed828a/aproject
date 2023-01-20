const express = require('express')
const path = require('path')
const rootDir = require('../util/path')
const router = express.Router()

const products = require('./shareData');

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
    console.log('rootDir', rootDir)
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))

    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
      });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    products.push({ title: req.body.title });
    res.redirect('/')
})

module.exports = router
exports.products = products