const http = require('http');
const router = require('./router');

http.createServer(router).listen(8080);