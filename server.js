const {createServer} = require('node:http');
const fs = require('fs');

const server = createServer((req, res) => {
    fs.readFile('./template.html', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('Server error');
            return;
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    });
});

server.listen(3000, '0.0.0.0', () => {
    console.log('Server running at https://localhost:3000')
});