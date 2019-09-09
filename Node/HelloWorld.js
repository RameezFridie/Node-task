// Modules required to run a=on port
const http = require('http');

// Creating server on port 3000
http.createServer(function(request, response) {
    // Response string Hello World
    response.write('Hello World!');
    response.end();
}).listen(3000);