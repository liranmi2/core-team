const TaskManagerDAL = require('./taskManagerDAL');
const data = new TaskManagerDAL();
const showBoard = (name) => {

    console.log(data.getAllTaskByBoard(name));
    console.log(data.getAllBoards());
}





