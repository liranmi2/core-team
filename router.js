const { showAllBoards, showAllTasksByBoard, showTaskById, errorHandler,
  createNewTaskInBoard, createNewBoard, deleteBoard,deleteTaskInBoard,
  getTaskByFilter, updateTask, exportBoardToCSV, renderHomePage } = require('./controllers');

const ROUTES = {
  GET: {
    '/': renderHomePage,
    '/boards' : showAllBoards,
    '/boards/:id/tasks': showAllTasksByBoard,
    '/boards/:id/tasks/:id': showTaskById,
    '/boards/:id/tasks/:status/:assignee/:type/:priority' : getTaskByFilter,
    '/boards/:id' : exportBoardToCSV
  },
  POST: {
    '/boards': createNewBoard,
    '/boards/:id/tasks': createNewTaskInBoard
  },
  PUT: {
    '/boards/:id/tasks/:id': updateTask
  },
  DELETE:{
    '/boards': deleteBoard,
    '/boards/:id/tasks': deleteTaskInBoard
  }
};

module.exports = (req, res) => {
  const handler = ROUTES[req.method][req.url];
  if (!handler) {
    return errorHandler(req, res);
  }

  return handler(req, res);
};
