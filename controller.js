const TaskManagerDAL = require('./taskManagerDAL');
const {boardStatistics} = require('./boardStatistic');
const {URL} = require('url');

const taskManagerDAL = new TaskManagerDAL();

getBoardId = (req) => {
    const u = new URL(req.url, `http://${req.headers.host}`).searchParams.get('boardId');
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
        const data = taskManagerDAL.getAllTaskByBoard(getBoardId(req));
        res.writeHeader(200);
        res.end(JSON.stringify(data));
        //this.props.match.params.id
    },
    showAllBoards: (req, res) => {
        const data = taskManagerDAL.getAllBoards();
        res.writeHeader(200);
        res.end(JSON.stringify(data));
    },
    updateBoard: (req, res) => {
        let body = [];
        let board;
        const id = getBoardId(req) - 1;
        req
            //.on('error', logger.log(err))
            .on('data', chunk => body.push(chunk))
            .on('end', () => {
                body = Buffer.concat(body).toString();
                board = JSON.parse(body);
                taskManagerDAL.updateBoard(id,board);
                res.end('done');
            })
    },
    createNewBoard: (req, res) => {
        let body = [];
        let board;

        req
            //.on('error', logger.log(err))
            .on('data', chunk => body.push(chunk))
            .on('end', () => {
                body = Buffer.concat(body).toString();
                board = JSON.parse(body);
                taskManagerDAL.createNewBoard(board);
                res.end('done');
            })
    },
    createNewTask: (req, res) => {
        let body = [];
        let task;
        const id = getBoardId(req) - 1;
        req
            //.on('error', logger.log(err))
            .on('data', chunk => body.push(chunk))
            .on('end', () => {
                body = Buffer.concat(body).toString();
                task = JSON.parse(body);
                taskManagerDAL.createNewTask(task,id);
                res.end('done');
            })
    }
}

// console.log(taskManagerDAL.getAllTaskByBoard(2));