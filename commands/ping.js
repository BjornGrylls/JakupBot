module.exports = {
  name: 'ping',
  description: 'The bot will respond to ping with a pong',
  execute(message, args) {
    var formattedmessage = 'pong'
    const env = process.env.env
    if (env) {
      formattedmessage += ' from ' + process.env.env
    }
    message.channel.send(formattedmessage)
  }
}