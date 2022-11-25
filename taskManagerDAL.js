const fs = require('fs');
const Path = require('path');
const { EventEmitter } = require('events');

module.exports = class TaskManagerDAL extends EventEmitter {
    constructor () {
        super();
        this.connectBoardJSON();
    }

    connectBoardJSON () {
        const data = require('./res/tasks.json');
        this.setData(data);
        this.on('updateData', () => {
            fs.writeFile(Path.join(__dirname, './data.json'), JSON.stringify(this.data), 'utf8', err => {
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

    updateData (payload) {
        this.setData([...this.data, payload]);
        this.emit('updateData');
    }

    getAllBoards () {
        return this.data;
    }

    getAllTaskByBoard(boardName) {
        for (const board of this.data.Boards) {
            if(board.BoardName == boardName) {
                return board.Tasks
            }
        }
    }
}
