const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url == '/home')
        res.end("Nitigya Chandel.");
    else res.end("Hello World.")
});

server.listen(3000, function process() {
    console.log("Server has started on port: " + 3000)
});