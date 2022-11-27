const fs = require('fs');
const Path = require('path');
const converter = require('json-2-csv');

const { EventEmitter } = require('events');

module.exports = class TaskManagerDAL extends EventEmitter {
    constructor() {
        super();
        this.connectBoardJSON();
    }

    connectBoardJSON() {
        const data = require('./res/tasks.json');
        this.setData(data);
        this.on('updateData', () => {
            fs.writeFile(Path.join(__dirname, './res/tasks.json'), JSON.stringify(this.data), 'utf8', err => {
                console.log(this.data);
                if (err) throw err;
                console.log('File has been saved!');
            });
        });
        return this;
    }

    setData(data) {
        this.data = data;
    }

    setBoards(data) {
        this.data.Boards = data;
    }

    setTaskByBoard(boardId,data) {
        this.data.Boards.find(board => board.BoardId == boardId).Tasks = data;
    }

    updateTaskByBoard(payload, boardId){
        this.setTaskByBoard(boardId, [...this.data.Boards.find(board => board.BoardId == boardId).Tasks, payload]);
        this.emit('updateData');
    }

    updateBoardsData(payload) {
        this.setBoards([...this.data.Boards, payload]);
        this.emit('updateData');
    }

    getAllBoards() {
        return this.data.Boards;
    }

    getAllTaskByBoard(boardId) {
        if(this.data.Boards.find(board => board.BoardId == boardId)) {
            return this.data.Boards.find(board => board.BoardId == boardId).Tasks;
        } else {
            this.emit('error');
            return "error";
        }

    }

    updateBoard(payload) {
        this.data.Boards.find(board => board.BoardId == payload.BoardId).BoardName = payload.BoardName;
        this.emit('updateData');
    }

    createNewBoard(payload) {
        let newID = 1;
        if (this.data.Boards.length > 0)
            newID = this.data.Boards[this.data.Boards.length - 1].BoardId + 1;

        const newBoard = {
            BoardId: newID,
            BoardName: payload.BoardName,
            Tasks: []
        }
        this.updateBoardsData(newBoard);
    }

    createNewTask(payload) {
        // console.log(payload);
        let newID = 1;
        if (this.data.Boards.find(board => board.BoardId == payload.BoardId).Tasks.length > 0)
            newID = this.data.Boards.find(board => board.BoardId == payload.BoardId).Tasks[this.data.Boards.find(board => board.BoardId == payload.BoardId).Tasks.length - 1].TaskId + 1;

        const newTask = {
            TaskId: newID,
            TaskName: payload.TaskName,
            TaskDetails: payload.TaskDetails,
            Status: payload.Status,
            Priority: payload.Priority,
            Type: payload.Type,
            Assignee: payload.Assignee,
            Creator: payload.Creator
        }
        this.updateTaskByBoard(newTask, payload.BoardId);
    }

    updateTask(payload) {
        if (payload.hasOwnProperty('TaskDetails'))
            this.data.Boards.find(board => board.BoardId == payload.BoardId).Tasks.find(task => task.TaskId == payload.TaskId).TaskDetails = payload.TaskDetails;
        if (payload.hasOwnProperty('Assignee'))
            this.data.Boards.find(board => board.BoardId == payload.BoardId).Tasks.find(task => task.TaskId == payload.TaskId).Assignee = payload.Assignee;
        if (payload.hasOwnProperty('Status'))
            this.data.Boards.find(board => board.BoardId == payload.BoardId).Tasks.find(task => task.TaskId == payload.TaskId).Status = payload.Status;
        this.emit('updateData');
    }

    deleteTask(payload) {
        this.data.Boards.find(board => board.BoardId == payload.BoardId).Tasks = this.data.Boards.find(board => board.BoardId == payload.BoardId).Tasks.filter(task => task.TaskId != payload.TaskId);
        this.emit('updateData');
    }

    deleteBoard(payload) {
        this.data.Boards = this.data.Boards.filter(board => board.BoardId != payload.BoardId);
        this.emit('updateData');
    }

    filterTasks(payload) {

        if (this.data.Boards.find(board => board.BoardId == payload.BoardId)) {
            if (payload.hasOwnProperty('Priority'))
                this.data.Boards.find(board => board.BoardId == payload.BoardId).Tasks = this.data.Boards.find(board => board.BoardId == payload.BoardId).Tasks.filter(task => task.Priority === payload.Priority);
            if (payload.hasOwnProperty('Assignee'))
                this.data.Boards.find(board => board.BoardId == payload.BoardId).Tasks = this.data.Boards.find(board => board.BoardId == payload.BoardId).Tasks.filter(task => task.Assignee === payload.Assignee);
            if (payload.hasOwnProperty('Type'))
                this.data.Boards.find(board => board.BoardId == payload.BoardId).Tasks = this.data.Boards.find(board => board.BoardId == payload.BoardId).Tasks.filter(task => task.Type === payload.Type);
            if (payload.hasOwnProperty('Status'))
                this.data.Boards.find(board => board.BoardId == payload.BoardId).Tasks = this.data.Boards.find(board => board.BoardId == payload.BoardId).Tasks.filter(task => task.Status === payload.Status);
            return this.data.Boards.find(board => board.BoardId == payload.BoardId).Tasks;
        } else {
            this.emit('error');
            return "error";
        }

    }

    exportToCsv(boardId){
        let todos =  this.data.Boards.find(board => board.BoardId == boardId).Tasks;
        converter.json2csv(todos, (err, csv) => {
            if (err) {
                throw err
            }

            // print CSV string
            // console.log(csv);

            // write CSV to a file
            fs.writeFileSync('tasks.csv', csv);
        })

        }

    sortTasks (payload){
    if (this.data.Boards.find(board => board.BoardId == payload.BoardId)) {
        if(payload.Priority == "t")
            this.data.Boards.find(board => board.BoardId == payload.BoardId).Tasks.sort((a,b) => a.Priority.localeCompare(b.Priority));
        if(payload.Assignee == "t")
            this.data.Boards.find(board => board.BoardId == payload.BoardId).Tasks.sort((a,b) => a.Assignee.localeCompare(b.Assignee));
        if(payload.Type == "t")
            this.data.Boards.find(board => board.BoardId == payload.BoardId).Tasks.sort((a,b) => a.Type.localeCompare(b.Type));
        if(payload.Status == "t")
            this.data.Boards.find(board => board.BoardId == payload.BoardId).Tasks.sort((a,b) => a.Status.localeCompare(b.Status));

        return this.data.Boards.find(board => board.BoardId == payload.BoardId).Tasks;
    } else {
        this.emit('error');
        return "error";
        }
    }
}