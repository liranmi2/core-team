const http = require('http');
const router = require('./router');
const Path = require("path");

http.createServer(router).listen(3030);
