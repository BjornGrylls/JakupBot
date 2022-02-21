const { Client, Intents } = require('discord.js');
var token;
try {
    token = require('./config.json').token;
} catch (error) {
    token = process.env.token
}

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

        message.channel.send("pongHeroku")
    }
    if (message.content.toLowerCase().includes('video') || message.content.toLowerCase().includes('optage')) {
        message.channel.send("Screencast-o-Matic er fantastisk! https://screencast-o-matic.com/")
    }
})

client.on('guildMemberAdd', member => {
    member.send('Velkommen til programmering')
})


client.login(token)