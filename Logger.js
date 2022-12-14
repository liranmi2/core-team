const moment = require('moment');
const fs = require('fs');
const { EventEmitter } = require('events');
const path = require('path');

module.exports = class Logger extends EventEmitter{
    constructor() {
        super();
        this.initLogger();
    }
    initLogger() {
        this.logger = console;
        this.storage = {
            write: data=> fs.appendFile(path.join(__dirname,'/logs.txt'),data,null,()=> console.log('data inserted to log file'))
        };
        // this.on('logToFile',this.logToFile);
        return this;
    }

    log(message = ''){
        const time = moment().format('DD-MM-YY hh:mm');
        const msg = `${time} -> ${message}`;
        this.emit('logToFile',msg);
        this.logger.log(`${time}->${message}`);
    }
    
    logToFile(data){
        this.storage.write(data + '\n')
    }
}