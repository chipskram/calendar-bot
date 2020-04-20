'use strict';
/*
 *  A bot that connects to a Google Calendar
 */

// Imports
const logger = require('./util/logger');
const Discord = require('discord.js');
const listeners = require('./config/listeners');

// Create an instance of a Discord client
const client = new Discord.Client();

// Ready event
client.on('ready', () => {
    logger.info('I am ready');
});

// Create event listeners
for(let l of listeners) {
    client.on(l.event, l.handler);
}

client.login('NzAxOTE3ODMxNzUwNzQ2MjEz.Xp4fNA.u2FeKdrIDjYWHD_0x68sN3GEyBg');