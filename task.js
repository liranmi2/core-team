module.exports = class Employee {
    constructor(taskName, taskDetails, status, priority, type, assignee, creator) {
        this.taskName = taskName;
        this.taskDetails = taskDetails;
        this.status = status;
        this.priority = priority;
        this.type = type;
        this.assignee = assignee;
        this.creator = creator;
    }
}