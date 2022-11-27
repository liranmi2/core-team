const http = require('http');
const router = require('./router');
const Path = require("path");

http.createServer(router).listen(3030);
console.log('we created a server');