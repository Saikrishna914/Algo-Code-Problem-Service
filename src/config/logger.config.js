const winston = require('winston');
require('winston-mongodb');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.MongoDB({
      db: 'mongodb://username:password@host:port/database', // replace with your MongoDB connection string
      collection: 'log', // optional, specify the collection name
      level: 'error', // optional, log level
      options: { useUnifiedTopology: true } // optional, additional MongoDB options
    })
  ]
});

module.exports = logger;
