module.exports = {
    name: 'prefix',
    description: 'command to change prefix',
    execute(message, args) {
        var formattedmessage
        if (args.length != 0) formattedmessage = 'Changed prefix to ' + args[0]
        else formattedmessage = 'You need to note a new prefix like "!prefix ?". Prefix wasn\'t changed'
        const env = process.env.env
        if (env) {
            formattedmessage += ' for ' + process.env.env
        }
        message.channel.send(formattedmessage)
    }
}