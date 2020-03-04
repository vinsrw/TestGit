// console.log('My Response');
// const http = require('http');
// let server = http.createServer((req, res) => {
// res.end('welcome to second response');

// });

// server.listen(3000, '127.0.0.1');


const http = require('http');

const app = require('./backend/app');

const port = process.env.port || 3000;

app.set('port', port);

const server = http.createServer(app);

server.listen(port);
