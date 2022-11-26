const TaskManagerDAL = require('./taskManagerDAL');
const {boardStatistics} = require('./boardStatistic');
const {URL} = require('url');

const taskManagerDAL = new TaskManagerDAL();

getId = (req, param) => {
    const u = new URL(req.url, `http://${req.headers.host}`).searchParams.get(param);
    return u;
}


module.exports = {
    errorHandler: (req, res) => {
        res.writeHeader(404);
        res.write('Bad request');
        res.end();
    },
    getTasksByBoard: (req, res) => {
        const boardId =getId(req, 'boardId');
        const data = taskManagerDAL.getAllTaskByBoard(boardId);
        let dataAndStats = boardStatistics(boardId);
        dataAndStats.tasks = data;
        res.writeHeader(200);
        res.end(JSON.stringify(dataAndStats));
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
        const boardId = getId(req, 'boardId');
        req
            //.on('error', logger.log(err))
            .on('data', chunk => body.push(chunk))
            .on('end', () => {
                body = Buffer.concat(body).toString();
                board = JSON.parse(body);
                taskManagerDAL.updateBoard(boardId,board);
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
        const boardId = getId(req, 'boardId');

        req
            //.on('error', logger.log(err))
            .on('data', chunk => body.push(chunk))
            .on('end', () => {
                body = Buffer.concat(body).toString();
                task = JSON.parse(body);
                taskManagerDAL.createNewTask(task,boardId);
                res.end('done');
            })
    },
    updateTask: (req, res) => {
        let body = [];
        let task;
        const boardId = getId(req, 'boardId');
        const taskId = getId(req, 'taskId');

        req
            //.on('error', logger.log(err))
            .on('data', chunk => body.push(chunk))
            .on('end', () => {
                body = Buffer.concat(body).toString();
                task = JSON.parse(body);
                taskManagerDAL.updateTask(task,boardId, taskId);
                res.end('done');
            })
    },
    deleteTask: (req, res) => {
        let body = [];
        let ids;
        req
            //.on('error', logger.log(err))
            .on('data', chunk => body.push(chunk))
            .on('end', () => {
                body = Buffer.concat(body).toString();
                ids = JSON.parse(body);
                taskManagerDAL.deleteTask(ids);
                res.end('done');
            })
        res.end('done');

    },
    deleteBoard: (req, res) => {
        let body = [];
        let boardId;
        req
            //.on('error', logger.log(err))
            .on('data', chunk => body.push(chunk))
            .on('end', () => {
                body = Buffer.concat(body).toString();
                boardId = JSON.parse(body);
                taskManagerDAL.deleteBoard(boardId);
                res.end('done');
            })
    },
    filterBoardByParameters: (req, res) => {
        let body = [];
        let task;
        const boardId = getId(req, 'boardId');
        req
            //.on('error', logger.log(err))
            .on('data', chunk => body.push(chunk))
            .on('end', () => {
                body = Buffer.concat(body).toString();
                task = JSON.parse(body);
                res.writeHeader(200);
                res.end(JSON.stringify(taskManagerDAL.filterTasks(task,boardId)));
            })
    }
}

// console.log(taskManagerDAL.getAllTaskByBoard(2));