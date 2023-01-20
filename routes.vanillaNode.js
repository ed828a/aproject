const fs = require("fs");

const requestHandler = (req, res) => {
    // you can base on url, method to response differently
    if (req.url === "/") {
        res.write(`
        <html>
            <head>
                <title>Enter Message</title>
            </head>
            <body>
                <form action="/message" method="POST" >
                    <input type='text' name="message" > 
                    <button type="submit">Send</button>
                </form>
            </body>
        </html>
        `);
        // for the form data, name attribute of <input> is the key of the key/value pair
        return res.end(); // res.end() send response to the client
    }

    // parse incoming POST request
    if (req.url === "/message" && req.method === "POST") {
        // res.on() listen to a certain event
        const dataChunks = [];
        res.on("data", (chunk) => {
            // 'data' event is fire whenever a new chunk is ready to be read
            console.log("chunk", chunk);
            dataChunks.push(chunk);
        });

        return res.on("end", () => {
            // 'end' event is fired once the parsing the incoming requests data is done
            const parsedBody = Buffer.concat(dataChunks).toString();
            console.log(parsedBody); // output: message="blabla.."
            const data = parsedBody.split("=")[1];
            fs.writeFile("message.txt", data, (err) => {
                if (!err) {
                    res.statusCode = 302;
                    res.setHeader("Location", "/");
                    return res.end();
                }
            });
        });
    }

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
};

module.exports = requestHandler
