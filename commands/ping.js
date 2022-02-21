module.exports = {
  name: 'ping',
  description: 'this is a ping command',
  execute(message, args) {
    var formattedmessage = 'mega pong'
    const env = process.env.env
    if (env) {
      formattedmessage += ' from ' + process.env.env
    }
    message.channel.send(formattedmessage)
  }
}