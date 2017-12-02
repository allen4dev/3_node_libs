const http = require('http');

const app = require('./server/app');

const server = http.createServer(app);

server.listen(3000, () => console.log('Server running in port 3000'));
