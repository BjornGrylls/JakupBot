require('dotenv').config();
const { Client, Intents } = require('discord.js');
const token = process.env.token

var exec = require('child_process').exec;
exec('node app.js &');


const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.once('ready', () => {
    console.log('Ready!')
})

client.on('messageCreate', message => {
    console.log(message.content)
    if (message.content.toLowerCase() == "ping") {

        message.channel.send("pong " + process.env.env)
    }
    if (message.content.toLowerCase().includes('video') || message.content.toLowerCase().includes('optage')) {
        message.channel.send("Screencast-o-Matic er fantastisk! https://screencast-o-matic.com/")
    }
})

client.on('guildMemberAdd', member => {
    member.send('Velkommen til programmering')
})


client.login(token)