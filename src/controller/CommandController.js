const _ = require('lodash');

const C = require('../config/constants');
const commands = require('../config/commands');

module.exports = {
    /**
     * Execute a given command.
     * @param message Message that triggered the command.
     * @param command Command to be executed.
     * @param args Arguments to the command.
     */
    executeCommand: (message, command, ...args) => {
        const cmd = commands[command];
        if(!_.isUndefined(cmd)) {
            cmd.handler(message, ...args);
        } else {
            message.channel.send(`Invalid command \`${command}\`. See \`${C.cmdFlag} help\``);
        }
    }
};