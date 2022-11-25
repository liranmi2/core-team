const TaskManagerDAL = require('./taskManagerDAL');
const statistics = require('./BoardStatisticObj');
const data = new TaskManagerDAL();

module.exports = {
    boardStatistics: (name) => {
        let status = [0,0,0];  //status[0] = To-Do, status[1] = In Progress, status[2] = Done
        let prior = [0,0,0]; //prior[0] = Low, prior[1] = Medium, prior[2] = High
        let taskCount = 0;
        for(const task of data.getAllTaskByBoard(name)) {
            taskCount++;
            switch (task.Status) {
                case "To-Do":
                    status[0]++;
                    break;
                case "In Progress":
                    status[1]++;
                    break;
                case "Done":
                    status[2]++;
                    break;
                default:
                    break;
            }
            switch (task.Priority) {
                case "Low":
                    prior[0]++;
                    break;
                case "Medium":
                    prior[1]++;
                    break;
                case "High":
                    prior[2]++;
                    break;
                default:
                    break;
            }
        }

        const statistic = new statistics(status, prior, taskCount);
        console.log(statistic);
    }
}


