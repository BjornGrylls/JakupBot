require('dotenv').config(); // Læs .env
const discord = require('discord.js')
const { Client, Intents } = require('discord.js'); // Bot
const fs = require('fs')
const token = process.env.token // Bot token

// Kør webserver i baggrunden
var exec = require('child_process').exec;
exec('node app.js &');

// Sæt flag som botten lytter på
const client = new Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
})

var exec = require('child_process').exec;
exec('node app.js &');


var prefix = '!' // må ikke ændres // men det gør jeg alligevel
client.commands = new discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command)
}

// HVA SKER DER, ER I GLAR? 
client.once('ready', () => {
    console.log('Ready!')
})

// Lyt på forskellige beskeder
client.on('messageCreate', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return
    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()
    console.log(command)

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args)
    } else if (command === 'video' || command === 'optage') {
        client.commands.get('screencast').execute(message, args)
    } else if (command == 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, discord, client)
    } else if (command === 'prefix') {
        if (args.length != 0) prefix = args[0]
        client.commands.get('prefix').execute(message, args)
    }
})

// Start bot
client.login(token)