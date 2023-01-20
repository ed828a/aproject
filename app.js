const express = require("express"); // express is a listener function
const path = require("path");

const adminRouts = require("./routes/admin");
const shopRouts = require("./routes/shop");

const app = express(); // expressJS os all about the middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // public is the static folder

// using ejs template engine
app.set("view engine", "ejs"); // ejs is supported by express.js
app.set("views", "views");

app.use("/admin", adminRouts);
app.use(shopRouts);

// catch all un-matched routes here
app.use((req, res, next) => {
    console.log("404 app's __dirname", __dirname);
    // res.status(404).send(`<h1>Page Not Found</h1>`)
    // res.sendFile(path.join(__dirname, 'views', '404.html'))
    res.status(404).render("404", {
        pageTitle: "Page Not Found",
        path: req.url,
    });
});

app.listen(3000);
