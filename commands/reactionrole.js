module.exports = {
  name: 'reactionrole',
  description: 'Reaction roles ;D',
  async execute(message, args, discord, client) {
    const channel = '943791639690883152'
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
    

    console.log(embed)
    let messageEmbed = await message.channel.send({embeds: [embed]})
    console.log('lol')
    messageEmbed.react(memberEmoji)

    client.on('messageReactionAdd', async (reaction, user) => {
      console.log('så langt så godt0')
      if(reaction.message.partial) await reaction.message.fetch()
      console.log('så langt så godt1')
      if(reaction.partial) await reaction.fetch()
      console.log('så langt så godt2')
      if(user.bot) return
      console.log('så langt så godt3')
      if(!reaction.message.guild) return
      console.log('så langt så godt4')

      if(reaction.message.channel.id == channel) {
        console.log('så langt så godt5')
        if(reaction.emoji.name == memberEmoji) {
          console.log('så langt så godt6')
          await reaction.message.guild.members.cache.get(user.id).roles.add(memberRole)
          await reaction.message.guild.members.cache.get(user.id).roles.remove(guestRole)

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
            
        }
      } else {
        return
      }
    })
  }
}