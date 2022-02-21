require('dotenv').config(); // Læs .env
const { Client, Intents } = require('discord.js'); // Bot
const token = process.env.token // Bot token

// Kør webserver i baggrunden
var exec = require('child_process').exec;
exec('node app.js &');

// Sæt flag som botten lytter på
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

// HVA SKER DER, ER I GLAR? 
client.once('ready', () => {
    console.log('Ready!')
})

// Lyt på forskellige beskeder
client.on('messageCreate', message => {
    console.log(message.content)
    if (message.content.toLowerCase() == "ping") {

        message.channel.send("pong " + process.env.env)
    }
    if (message.content.toLowerCase().includes('video') || message.content.toLowerCase().includes('optage')) {
        message.channel.send("Screencast-o-Matic er fantastisk! https://screencast-o-matic.com/")
    }
})

// Unused
// client.on('guildMemberAdd', member => {
//     member.send('Velkommen til programmering')
// })

// Start bot
client.login(token)