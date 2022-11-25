const JobsRepository = require('./JobsRepository');
const Logger = require('./Logger');
const html = require('./client');

const jobsRepository = new JobsRepository();
const logger = new Logger(); // how we can use it a singleton?

module.exports = {
  errorHandler: (req, res) => {
    res.writeHeader(404);
    res.write('Bad request');
    res.end();
  },
  findAllJobs: (req, res) => {
    const data = jobsRepository.getAllJobs();
    res.setHeader('Content-Type', 'application/json');
    res.writeHeader(200);
    res.end(JSON.stringify(data));
  },
  findJobByName: (req, res) => {},
  findJobById: (req, res) => {},
  createNewJob: (req, res) => {
    let body = [];
    let job;

    req
      .on('error', err => logger.log(err))
      .on('data', chunk => body.push(chunk))
      .on('end', () => {
        body = Buffer.concat(body).toString();
        job = JSON.parse(body);
        jobsRepository.createNewJob(job);
        res.end('done');
      });
  },
  updateJob: (req, res) => {},
  renderHomePage: (req, res) => {
    res.write(html);
  }
};
