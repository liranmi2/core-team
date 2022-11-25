module.exports = class TaskManagerDAL {
    constructor(status, prior, count) {
        //status[0] = To-Do, status[1] = In Progress, status[2] = Done
        this.toDo = (status[0]/count) * 100;
        this.inProgress = (status[1]/count) * 100;
        this.done = (status[2]/count) * 100;
        //prior[0] = Low, prior[1] = Medium, prior[2] = High
        this.low = (prior[0]/count) * 100;
        this.medium = (prior[1]/count) * 100;
        this.high = (prior[2]/count) * 100;
    }
}

