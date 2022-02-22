module.exports = {
  name: 'mute',
  description: "Mutes hvis folk ikke overholder reglerne!",
  execute(message, client) {
      if(message.author) {
          const targetID = message.author.id
          let mainRole = message.guild.roles.cache.find(role => role.name === 'Exclusive club')
          let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute')
          let memberTarget = message.guild.members.cache.get(targetID)

          memberTarget.roles.remove(mainRole.id)
          memberTarget.roles.add(muteRole.id)
          message.channel.send(`<@${memberTarget.user.id}> has been muted.`)

      } else {
          message.channel.send('User not found. Cannot mute.')
      }
  }
}