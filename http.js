const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Assalamu alaikum!');
        res.write('How are you?');
        res.end();
    } else if (req.url === '/about') {
        res.write('This is About page!');
        res.end();
    } else {
        res.write('Not Found!');
        res.end();
    }
});

server.listen(3000);

console.log('Server is running!');
