const TaskManagerDAL = require('./taskManagerDAL');
const {boardStatistics} = require('./boardStatistic');
const {URL} = require('url');

const taskManagerDAL = new TaskManagerDAL();

getBoardName = (req) => {
    const u = new URL(req.url, `http://${req.headers.host}`).searchParams.get('boardName');
    console.log(u);
    return u;
}

module.exports = {
    errorHandler: (req, res) => {
        res.writeHeader(404);
        res.write('Bad request');
        res.end();
    },
    getTasksByBoard: (req, res) => {

        const data = taskManagerDAL.getAllTaskByBoard(getBoardName(req));
        res.writeHeader(200);
        res.end(JSON.stringify(data));
    },
    getBoards: (req, res) => {
        const data = taskManagerDAL.getAllBoards();
        res.writeHeader(200);
        res.end(JSON.stringify(data));
    }
}