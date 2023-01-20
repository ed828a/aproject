const express = require('express')
const path = require('path');
const products = require('./shareData');

const router = express.Router()

router.get('/', (req, res, next) => {
    // res.send('<h1>Hello from Express !</h1>')
    console.log('__dirname', __dirname)
    // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'))
    // __dirnameis a global variable which holds the absolute path of the folder where this file sitting on our operating system.
    // __dirname is dynamic


    // this render is using the default templating engine to render a view
    // the first argument is the name of the view, the view file must be inside of views folder 
    // the second argument is the data you want to pass to the view 
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      }); 
    
}); 

module.exports = router