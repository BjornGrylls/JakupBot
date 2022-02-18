const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    console.log(message.content)
    if (message.content == "ping") {

        message.channel.send("Push test = pong")
    }
});

client.login(token);