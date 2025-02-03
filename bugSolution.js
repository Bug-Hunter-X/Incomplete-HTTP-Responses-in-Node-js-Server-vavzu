const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!'); // Added res.end() to send the complete response
  console.log('Request received');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});