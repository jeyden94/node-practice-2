const {createServer} = require('node:http');

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello, world!</h1>');
});

server.listen(3000, '0.0.0.0', () => {
    console.log('Server running at https://localhost:3000')
});