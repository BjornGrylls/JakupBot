require('dotenv').config();

const discord = require('discord.js')
const { Client, Intents } = require('discord.js')
const fs = require('fs')

const client = new Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
})

const token = process.env.token

var exec = require('child_process').exec;
exec('node app.js &');


const prefix = '!'
client.commands = new discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))

for(const file of commandFiles) {
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command)
}


client.once('ready', () => {
    console.log('Ready!')
})

client.on('messageCreate', message => {

    if(!message.content.startsWith(prefix) || message.author.bot) return
    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

    console.log(command)
    
    if(command === 'ping') {
        client.commands.get('ping').execute(message, args)
    } else if(command === 'video' || command === 'optage') {
        client.commands.get('screencast').execute(message, args)
    } else if(command == 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, discord, client)
    }
})

client.on('guildMemberAdd', member => {
    member.send('Velkommen til programmering')
})


client.login(token)