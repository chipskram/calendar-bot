const logger = require('../util/logger');

const { executeCommand } = require('../controller/CommandController');

// Import constants
const C = require('./constants');

// init listeners array
let listeners = [];

// Add command listener
listeners.push({
    event: 'message',
    handler: message => {
        if(message.content.startsWith(C.cmdFlag)) {
            let args = message.content.split(' ');
            let command = args[1];
            args.slice(2);

            executeCommand(message, command, ...args);
        }
    }
});

module.exports = listeners;