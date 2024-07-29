// Create a web server that listens for requests on port 3000. It should respond to requests for /comments with a JSON object that represents a list of comments (you can make up your own comments). It should respond to requests for any other path with a 404 status code and a message of "Not Found".

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const comments = [
      { username: 'Alice', content: 'I love apples!' },
      { username: 'Bob', content: 'I love oranges!' },
      { username: 'Charlie', content: 'I love bananas!' },
    ];
    res.end(JSON.stringify(comments));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});