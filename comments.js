// Create a web server
// When the server receives a request, it will send a response
// The server will respond with a message "Hello World" when a request is made to the root URL
// The server will respond with a message "Comments page" when a request is made to the /comments URL

// Load the http module
var http = require('http');

// Configure the HTTP server to respond with 'Hello World' to all requests
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  if (request.url === '/comments') {
    response.end("Comments page\n");
  } else {
    response.end("Hello World\n");
  }
});

// Listen on port 8000, IP defaults to
