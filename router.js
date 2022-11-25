const {getTasksByBoard, errorHandler, getBoards} = require('./controller');
const {URL} = require('url');

const ROUTES = {
    GET: {
        '/Boards': getBoards,
        '/Boards/name': getTasksByBoard

    }
};

module.exports = (req, res) => {
    const pathName = new URL(req.url, `http://${req.headers.host}`).pathname;
    const handler = ROUTES[req.method][pathName];
    console.log(req.url);
    if (!handler) {
        return errorHandler(req, res);
    }

    return handler(req, res);
};