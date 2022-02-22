module.exports = {
  name: 'unknown',
  description: 'Unknown command',
  execute(message, args) {
    message.channel.send("Unknown command")
  }
}