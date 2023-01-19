const http = require('http')

const server = http.createServer((req, res) => { // this listener function handle all incoming requests 
    console.log(req)
})

server.listen(3000, () => {
    console.log('server is up on port 3000')
})