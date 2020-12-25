const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ntek",
  aliases: ["pong"],
  description: "Display all commands and descriptions",
  execute(message,args) {
    const role = message.mentions.roles.first();

    args = role 

     const ListEmbed = new MessageEmbed()
            .setTitle('Users with role:')
            .setDescription(message.guild.roles.cache.get(role.id).members.map(m=>m.user.tag).join('\n'));
        message.channel.send(ListEmbed);                    
    }

  }

