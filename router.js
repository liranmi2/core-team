const { errorHandler,showAllBoards,getTasksByBoard,
  createNewTask, createNewBoard, deleteBoard,deleteTask,
  filterBoardByParameters, updateTask,updateBoard, exportBoardToCSV, renderHomePage } = require('./controller');
const {URL} = require('url');

const ROUTES = {
  GET: {
    '/': renderHomePage,
    '/boards' : showAllBoards,
    '/boards/id': getTasksByBoard
  },
  POST: {
    '/boards': createNewBoard,
    '/boards/id': createNewTask,
    '/boards/id/filter': filterBoardByParameters
  },
  PUT: {
    '/boards/id': updateBoard,
    '/boards/id/tasks/id': updateTask
  },
  DELETE:{
    '/boards/id': deleteBoard,
    '/boards/id/tasks/id': deleteTask
  }
};

module.exports = (req, res) => {
  const pathName = new URL(req.url, `http://${req.headers.host}`).pathname;
  const handler = ROUTES[req.method][pathName];
  if (!handler) {
    return errorHandler(req, res);
  }

  return handler(req, res);
};
