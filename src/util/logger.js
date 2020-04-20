const pino = require('pino');
const logger = pino({
    prettyPrint: {
        levelFirst: true,
        translateTime: true,
        ignore: 'pid,hostname'
    },
});

module.exports = logger;