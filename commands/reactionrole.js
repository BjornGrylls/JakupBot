module.exports = {
  name: 'reactionrole',
  description: 'Reaction roles ;D',
  async execute(message, args, discord, client) {
    const channel = '943791639690883152'
    const exclusiveclub = '945237454422671411'
    const memberRole = message.guild.roles.cache.find(role => role.name === "Exclusive club")
    const guestRole = message.guild.roles.cache.find(role => role.name === "Guest")
    const memberEmoji = '👍'
  
    let embed = new discord.MessageEmbed()
      .setColor('#e42643')
      .setTitle('Confirm that you have read the rules')
      .setDescription('You need to confirm that you have read the rules to become member ' + `${memberEmoji}`)
      .addFields(
        {name: 'Rule 1', value: 'Vær sød'}
      )
    
    let messageEmbed = await message.channel.send({embeds: [embed]})
    messageEmbed.react(memberEmoji)

    client.on('messageReactionAdd', async (reaction, user) => {
      if(reaction.message.partial) await reaction.message.fetch()
      if(reaction.partial) await reaction.fetch()
      if(user.bot) return
      if(!reaction.message.guild) return

      if(reaction.message.channel.id == channel) {
        if(reaction.emoji.name == memberEmoji) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(memberRole)
          await reaction.message.guild.members.cache.get(user.id).roles.remove(guestRole)
          const channles = reaction.message.guild.channels.cache.get(exclusiveclub);
          channles.send("<@"+user.id+"> was given <@&945237536236785684>")
        }
      } else {
        return
      }
    })
    
    client.on('messageReactionRemove', async (reaction, user) => {
      if(reaction.message.partial) await reaction.message.fetch()
      if(reaction.partial) await reaction.fetch()
      if(user.bot) return
      if(!reaction.message.guild) return

      if(reaction.message.channel.id == channel) {
        if(reaction.emoji.name == memberEmoji) {
          await reaction.message.guild.members.cache.get(user.id).roles.remove(memberRole)
          await reaction.message.guild.members.cache.get(user.id).roles.add(guestRole)
          const channles = reaction.message.guild.channels.cache.get(exclusiveclub);
          channles.send("<@"+user.id+"> has gotten <@&945237536236785684> removed")
        }
      } else {
        return
      }
    })
  }
}