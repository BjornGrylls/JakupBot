module.exports = {
  name: 'unmute',
  description: "Unmutes folk når de accepterer reglerne igen.",
  execute(message, args) {
      // const target = message.mentions.users.first()
      const targetID = message.author.user.id
      if(target) {
          // let mainRole = message.guild.roles.cache.find(role => role.name === 'Exclusive club' || role.name === 'Guest')
          let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute')
          let memberTarget = message.guild.members.cache.get(targetID)

          memberTarget.roles.remove(mainRole.id)
          memberTarget.roles.add(muteRole.id)
          message.channel.send(`<@${memberTarget.user.id}> has been unmuted.`)

      } else {
          message.channel.send('User not found. Cannot unmute.')
      }
  }
}