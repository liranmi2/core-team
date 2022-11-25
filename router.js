const { showAllBoards, showTaskById, errorHandler,getTasksByBoard,
  createNewTask, createNewBoard, deleteBoard,deleteTaskById,
  getTaskByFilter, updateTask, exportBoardToCSV, renderHomePage } = require('./controller');
const {URL} = require('url');

const ROUTES = {
  GET: {
    '/': renderHomePage,
    '/boards' : showAllBoards,
    '/boards/id': getTasksByBoard,
    // '/boards/:id/tasks/:status/:assignee/:type/:priority' : getTaskByFilter,
    //'/boards/:id' : exportBoardToCSV
  },
  POST: {
    '/boards': createNewBoard,
    '/boards/:id/tasks': createNewTaskInBoard
  },
  PUT: {
    '/boards/id': updateBoard,
    '/boards/id/tasks/taskid': updateTask
  },
  DELETE:{
    '/boards': deleteBoard,
    '/boards/id/tasks/taskid': deleteTaskById
  }
};

module.exports = (req, res) => {
  const handler = ROUTES[req.method][req.url];
  if (!handler) {
    return errorHandler(req, res);
  }

  return handler(req, res);
};
