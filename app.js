const http = require("http");

const server = http.createServer((req, res) => {
    // this listener function handle all incoming requests
    console.log(req.url, req.method, req.headers);
    // process.exit();  // this close the server
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <html>
        <head>
            <title>My First Page</title>
        </head>
        <body>
            <h2>Hello from Node.js Server!</h2>
        </body>
    </html>`);
    res.end(); // no res.write() after res.end()
});

server.listen(3000, () => {
    console.log("server is up on port 3000");
});
