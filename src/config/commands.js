/**
 * @callback CmdHandler
 * @param {Discord.Message} message - message that triggered the command.
 * @param {...string} args - arguments to the command.
 */

/**
 * @typedef Command
 * @type {object}
 * @property {string} description - description of the command.
 * @property {CmdHandler} handler - function to be executed with the command.
 */

/**
 * Commands that are available in the bot.
 * @type {Object.<string, Command>}
 */

const commands = {
    ping: {
        description: "Pong!",
        handler: (message) => {
            message.channel.send("Pong!");
        }
    }
};

module.exports = commands;