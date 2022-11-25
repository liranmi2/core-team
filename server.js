const http = require('http');
const router = require('./router');
const Path = require("path");

http.createServer(router).listen(3030);
// module.exports = server => {
//     // dotenv.config({ path: Path.join(__dirname, './.env') });
//     const port = process.env.PORT || 8000;
//     const start = () => server.listen(port, () => logger.log(`listening on port ${port}`));
//
//     // server.on('request', request => {
//     //     logger.newRequest(request);
//     //     request.on('error', err => logger.log(err));
//     // });
//     //
//     // server.on('error', err => logger.log(err));
//
//     return { start };
// };